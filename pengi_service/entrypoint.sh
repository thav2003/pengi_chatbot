#!/bin/sh


echo "Run app with uvicorn server..."
uvicorn app:app --port 8000 --host 0.0.0.0 --workers 1