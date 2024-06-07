import os

from pydantic_settings import BaseSettings


class DocumentConfig(BaseSettings):
    # Document config
    COLLECTION_NAME: str = "Pengi-Doc-V2"
    # EMBEDDING_DIM: int = 384
    EMBEDDING_DIM: int = 1024
    THRESHOLD: float = 0.85
    TOP_K: int = 3
    CHUNK_SIZE: int = 700
    CHUNK_OVERLAP: int = 100
    BATCH_SIZE: int = 100
    EMBEDDING_MODEL: str = "intfloat/multilingual-e5-small"
    TOKENIZER_MODEL: str = "intfloat/multilingual-e5-small"
    UPLOAD_DIR: str = "./data/document/"



document_config = DocumentConfig()
