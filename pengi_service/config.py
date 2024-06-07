import json
import logging
import os
from typing import Optional

import boto3
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

basedir = os.path.abspath(os.path.dirname(__file__))


class Settings(BaseSettings):
    # App config
    APP_NAME: str = "API PENGI Chatbot"
    APP_ENV: str = "develop"

    # Logging setting
    DATE_FMT: str = "%Y-%m-%d %H:%M:%S"
    LOG_DIR: str = f"{basedir}/logs/api.log"
    FILE_LOG: bool = os.getenv("FILE_LOG", True)

    # Qdrant configuration
    QDRANT_URL: str = os.getenv("QDRANT_URL", "http://localhost:6334")
    QDRANT_KEY: Optional[str] = os.getenv("QDRANT_KEY")




def get_secret(secret_name: str, region_name: str = "us-east-1") -> dict:
    # Create a Secrets Manager client
    client = boto3.client(service_name="secretsmanager", region_name=region_name)

    try:
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
        secret = get_secret_value_response["SecretString"]
        return json.loads(secret)
    except Exception as e:
        logging.error(f"Error retrieving secret {secret_name}: {e}")
        return {}


def update_environment_with_secrets(secret_name: str, region_name: str = "us-east-1"):
    secrets = get_secret(secret_name, region_name)
    for key, value in secrets.items():
        os.environ[key] = value


ENV = os.getenv("ENV", "LOCAL")

if ENV == "LOCAL":
    load_dotenv()
else:
    SECRET_NAME = os.getenv("SECRET_NAME")
    if SECRET_NAME:
        logging.info(f"SECRET_NAME: {SECRET_NAME}")
        update_environment_with_secrets(
            secret_name=SECRET_NAME, region_name="us-east-1"
        )
    else:
        logging.error("SECRET_NAME environment variable is not set")

settings = Settings()
