from typing import List

from pydantic import BaseModel


class ReferenceSchema(BaseModel):
    document_id: int
    document_name: str
    content: str
    page: int


class RequestSchema(BaseModel):
    session_id: str
    conversation_id: int
    question: str


class StreamingRequestSchema(BaseModel):
    session_id: str
    conversation_id: int
    question: str


class ResponseSchema(BaseModel):
    question: str
    answer: str
    relevant_docs: List[ReferenceSchema]


class ConversationSchema(BaseModel):
    session_id: str
    conversation_id: int
    question: str
    answer: str
    relevant_docs: List[ReferenceSchema]
