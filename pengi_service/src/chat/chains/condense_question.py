from langchain.schema.messages import AIMessage, HumanMessage
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI

from src.chat.config import chat_config
from src.chat.prompts.condense_question import CONDENSE_QUESTION_PROMPT


class CondenseQuestionChain:
    def __init__(self) -> None:
        self.prompt = CONDENSE_QUESTION_PROMPT
        self.llm = ChatOpenAI(model=chat_config.MODEL_GPT)
        self.output_parser = StrOutputParser()
        self.chain = self.prompt | self.llm | self.output_parser

    def format_conversation_history(self, conversation_history):
        buffer = []
        for chat in conversation_history:
            buffer.append(HumanMessage(content=chat["question"]))
            buffer.append(AIMessage(content=chat["answer"]))

        return buffer

    async def run(self, conversation_history, question):
        if not conversation_history:
            # Keep the question as is if there's no conversation context.
            return question

        conversation_history = self.format_conversation_history(
            conversation_history=conversation_history
        )

        new_question = await self.chain.ainvoke(
            {"question": question, "conversation_history": conversation_history}
        )

        return new_question

    def run_sync(self, chat_history, question):
        if not chat_history:
            # Keep the question as is if there's no conversation context.
            return question

        chat_history = self.format_conversation_history(
            conversation_history=chat_history
        )

        new_question = self.chain.invoke(
            {"question": question, "conversation_history": chat_history}
        )

        return new_question
