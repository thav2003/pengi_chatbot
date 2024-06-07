from langchain.prompts import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)

system_message = """
You are an AI language model assistant
"""

user_message = """Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question, in its original language.
Conversation history:
{conversation_history}
Follow question: {question}
Standalone question:"""

CONDENSE_QUESTION_PROMPT = ChatPromptTemplate.from_messages(
    [
        SystemMessagePromptTemplate.from_template(system_message),
        HumanMessagePromptTemplate.from_template(user_message),
    ]
)
