from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from src.utils import LOGGER
from src.chat.schemas import (
    ConversationSchema,
    RequestSchema,
    ResponseSchema,
    StreamingRequestSchema,
)
from src.chat.service import ChatService
from src.dependencies import document_search

router = APIRouter()
chat_service = ChatService(document_search=document_search)

LOGGER.info("convservation")
LOGGER.info(chat_service.conversations)

@router.post("/get_answer", response_model=ResponseSchema)
async def get_answer(data: RequestSchema):
    result = await chat_service.get_answer(
        session_id=data.session_id,
        conversation_id=data.conversation_id,
        question=data.question,
    )

    return result


@router.post("/get_answer_streaming", response_class=StreamingResponse)
async def get_answer_streaming(data: StreamingRequestSchema):
    generator = chat_service.get_answer_streaming(
        session_id=data.session_id,
        conversation_id=data.conversation_id,
        question=data.question,
    )

    return StreamingResponse(generator, media_type="text/event-stream")


@router.get("/get_conversation", response_model=ConversationSchema)
async def get_conversation(session_id: str, conversation_id: int):
    result = await chat_service.get_conversation(
        session_id=session_id, conversation_id=conversation_id
    )

    return result
