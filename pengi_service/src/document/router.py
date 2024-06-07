from fastapi import APIRouter, File, UploadFile

from src.dependencies import document_search
from src.document.schemas import ResponseSchema
from src.document.service import DocumentService

router = APIRouter()
document_service = DocumentService(document_search=document_search)


@router.post("/upload_document", response_model=ResponseSchema)
async def upload_document(document_id: int, file: UploadFile = File(...)):
    await document_service.upload_document(document_id=document_id, file=file)

    return ResponseSchema(message="Upload successfully!")


@router.delete("/delete_document", response_model=ResponseSchema)
async def delete_document(document_id: int):
    await document_service.delete_document(document_id=document_id)

    return ResponseSchema(message="Delete successfully!")
