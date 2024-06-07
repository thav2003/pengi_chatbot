import functools
import logging
import time
from datetime import datetime

import pyinstrument
import pytz

from config import settings


def time_profiling(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        LOGGER.info(
            f"Function {func.__name__} executed in {time.time() - start_time:.4f} seconds."
        )
        return result

    return wrapper


def async_time_profiling(func):
    @functools.wraps(func)
    async def wrapper(*args, **kwargs):
        start_time = time.time()
        result = await func(*args, **kwargs)
        LOGGER.info(
            f"Function {func.__name__} executed in {time.time() - start_time:.4f} seconds."
        )
        return result

    return wrapper


def async_py_profiling(func):
    async def wrapper(*args, **kwargs):
        profiler = pyinstrument.Profiler(async_mode="enabled")
        profiler.start()
        result = await func(*args, **kwargs)
        profiler.stop()
        with open(f"./logs/time_execute_{func.__name__}.html", "w") as f:
            f.write(profiler.output_html())
        return result

    return wrapper


def py_profiling(func):
    def wrapper(*args, **kwargs):
        profiler = pyinstrument.Profiler()
        profiler.start()
        result = func(*args, **kwargs)
        profiler.stop()
        with open(f"./logs/time_execute_{func.__name__}.html", "w") as f:
            f.write(profiler.output_html())
        return result

    return wrapper


def initial_logger():
    # Create a logger instance
    logger = logging.getLogger("app")

    # Set the logging level
    logger.setLevel(logging.DEBUG)

    # Set the timezone to Vietnam
    vietnam_timezone = pytz.timezone("Asia/Ho_Chi_Minh")

    # Configure logging with the Vietnam timezone
    logging.Formatter.converter = (
        lambda *args: pytz.utc.localize(datetime.utcnow())
        .astimezone(vietnam_timezone)
        .timetuple()
    )

    # Define the log format
    console_log_format = "%(asctime)s - %(levelname)s - %(message)s"
    file_log_format = (
        "%(asctime)s - %(levelname)s - %(message)s - (%(filename)s:%(lineno)d)"
    )

    # Create a console handler
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.DEBUG)
    console_handler.setFormatter(
        logging.Formatter(console_log_format, datefmt=settings.DATE_FMT)
    )
    logger.addHandler(console_handler)

    # Create a file handler
    if settings.FILE_LOG is True:
        file_handler = logging.FileHandler(filename=settings.LOG_DIR, encoding="utf-8")
        file_handler.setLevel(logging.DEBUG)
        file_handler.setFormatter(
            logging.Formatter(file_log_format, datefmt=settings.DATE_FMT)
        )
        logger.addHandler(file_handler)

    return logger


LOGGER = initial_logger()
