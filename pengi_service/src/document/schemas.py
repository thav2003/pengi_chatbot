from pydantic import BaseModel


class ResponseSchema(BaseModel):
    message: str


class DeleteSchema(BaseModel):
    document_name: str
