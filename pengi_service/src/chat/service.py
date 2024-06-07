from typing import AsyncIterable, Dict

from langchain.callbacks import AsyncIteratorCallbackHandler
from langchain.schema import HumanMessage
from langchain_openai import ChatOpenAI

from src.utils import LOGGER
from src.chat.prompts.generate_answer import GENERATE_ANSWER_PROMPT
from src.chat.chains.condense_question import CondenseQuestionChain
from src.chat.chains.generate_answer import GenerateAnswerChain
from src.chat.config import chat_config


class ChatService:
    def __init__(self, document_search):
        self.document_search = document_search
        self.condense_question_chain = CondenseQuestionChain()
        self.generate_answer_chain = GenerateAnswerChain()
        self.llm_streaming = ChatOpenAI(
            model=chat_config.MODEL_GPT,
            verbose=True,
            temperature=0.7,
        )

        self.streaming_chain = GENERATE_ANSWER_PROMPT | self.llm_streaming

        self.conversations: Dict[str, Dict[int, Dict]] = {}


    async def get_relevant_document(self, question):
        relevant_docs = await self.document_search.search(
            question=question, top_k=chat_config.DOCUMENT_TOP_K
        )
    
        query_context = ""
        for document in relevant_docs:
            query_context += document["content"] + "\n\n"

        rel_doc = [
            {
                "page": doc["page"],
                "document_name": doc["document_name"],
                "document_id": doc["document_id"],
                "content": doc["content"],
            }
            for doc in relevant_docs
        ]
        return {"context": query_context, "relevant_docs": rel_doc}

    def get_relevant_document_sync(self, question):
        relevant_docs = self.document_search.search_sync(
            question=question, top_k=chat_config.DOCUMENT_TOP_K
        )

        query_context = ""
        for document in relevant_docs:
            query_context += document["content"] + "\n\n"

        rel_doc = [
            {
                "page": doc["page"],
                "document_name": doc["document_name"],
                "document_id": doc["document_id"],
                "content": doc["content"],
            }
            for doc in relevant_docs
        ]
        return {"context": query_context, "relevant_docs": rel_doc}

    def get_answer_sync(self, question):

        query_result = self.get_relevant_document_sync(question=question)
        answer = self.generate_answer_chain.run_sync(
            context=query_result["context"], question=question
        )

        if answer == "No Answer":
            answer = chat_config.PROMPT_NOT_FOUND
            relevant_docs = []

        else:
            relevant_docs = query_result["relevant_docs"]

        LOGGER.info(f"Answer: {answer}")

        return {"question": question, "answer": answer, "relevant_docs": relevant_docs}

    async def get_answer(self, session_id, conversation_id, question):
        # Retrieve conversation from mongo database
        # conversation_history = await get_conversation_history(session_id=session_id)
        conversation_history = self.conversations.get(session_id, {}).get(conversation_id, {}).get("history", [])
        LOGGER.info(f"Conversation History")
        LOGGER.info(conversation_history)
        
        question = await self.condense_question_chain.run(
            conversation_history=conversation_history, question=question
        )

        LOGGER.info(f"Condense question: {question}")


        query_result = await self.get_relevant_document(question=question)

        answer = await self.generate_answer_chain.run(
            context=query_result["context"], question=question
        )

        if answer == "No Answer":
            answer = chat_config.PROMPT_NOT_FOUND
            relevant_docs = []

        else:
            relevant_docs = query_result["relevant_docs"]

        # Add conversation to mongo database
        # await add_conversation(
        #     session_id=session_id,
        #     conversation_id=conversation_id,
        #     question=question,
        #     answer=answer,
        #     relevant_docs=relevant_docs,
        # )
        if session_id not in self.conversations:
            self.conversations[session_id] = {}
        if conversation_id not in self.conversations[session_id]:
            self.conversations[session_id][conversation_id] = {"history": []}

        self.conversations[session_id][conversation_id]["history"].append({
            "question": question,
            "answer": answer,
            "relevant_docs": relevant_docs,
        })

        LOGGER.info(f"Answer: {answer}")

        return {"question": question, "answer": answer, "relevant_docs": relevant_docs}

    async def get_answer_streaming(
        self, session_id, conversation_id, question
    ) -> AsyncIterable[str]:
        # Retrieve conversation from mongo database
        # conversation_history = await get_conversation_history(session_id=session_id)
        conversation_history = self.conversations.get(session_id, {}).get(conversation_id, {}).get("history", [])
        
        question = await self.condense_question_chain.run(
            conversation_history=conversation_history, question=question
        )

        LOGGER.info(f"Condense question: {question}")

        query_result = await self.get_relevant_document(question=question)
        answer = ""
        async for stream in self.streaming_chain.astream(
            {"context": query_result["context"], "question": question}
        ):
            # LOGGER.info(f"Token response: {stream.content}")
            answer += stream.content
            yield stream.content

        relevant_docs = query_result["relevant_docs"]

        LOGGER.info(f"Answer: {answer}")

        # Add conversation to mongo database
        # await add_conversation(
        #     session_id=session_id,
        #     conversation_id=conversation_id,
        #     question=question,
        #     answer=answer,
        #     relevant_docs=relevant_docs,
        # )
        if session_id not in self.conversations:
            self.conversations[session_id] = {}
        if conversation_id not in self.conversations[session_id]:
            self.conversations[session_id][conversation_id] = {"history": []}

        self.conversations[session_id][conversation_id]["history"].append({
            "question": question,
            "answer": answer,
            "relevant_docs": relevant_docs,
        })

    async def get_answer_streaming_backup(self, question) -> AsyncIterable[str]:
        callback_handler = AsyncIteratorCallbackHandler()
        llm_streaming = ChatOpenAI(
            streaming=True,
            model=chat_config.MODEL_GPT,
            verbose=True,
            temperature=0.7,
            callbacks=[callback_handler],
        )

        LOGGER.info(f"Question: {question}")
        task = asyncio.create_task(
            llm_streaming.agenerate(messages=[[HumanMessage(content=question)]])
        )

        try:
            async for token in callback_handler.aiter():
                LOGGER.info(f"Token response: {token}")
                yield token
        except Exception as e:
            LOGGER.error(f"Caught exception: {e}")
        finally:
            LOGGER.info("Done response")
            callback_handler.done.set()

        LOGGER.info("Done task")
        await task

    async def get_conversation(self, session_id, conversation_id):
        # result = await get_conversation(
        #     session_id=session_id, conversation_id=conversation_id
        # )
        result = self.conversations.get(session_id, {}).get(conversation_id, {})
        
        LOGGER.info(f"Conversation: {result}")

        return result
