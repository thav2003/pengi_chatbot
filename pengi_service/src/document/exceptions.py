from src.document.constants import ErrorCode
from src.exceptions import BadRequest, NotFound


class ErrorFormat(BadRequest):
    DETAIL = ErrorCode.ERROR_FORMAT


class ErrorUpload(BadRequest):
    DETAIL = ErrorCode.ERROR_UPLOAD


class ErrorDelete(BadRequest):
    DETAIL = ErrorCode.ERROR_DELETE
