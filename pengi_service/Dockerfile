FROM python:3.10-slim

WORKDIR /app

# Update the package lists
RUN apt-get update && \
    apt install curl -y && \
    apt clean && \
    rm -rf /var/cache/apt/*

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONIOENCODING=utf-8

# Upgrade pip to the latest version
RUN pip install --upgrade pip

# Install PyTorch and related libraries for CPU
# RUN pip install torch==2.2.1 torchvision==0.17.1 --index-url https://download.pytorch.org/whl/cpu

# Copy the requirements file to the /app directory
COPY requirements.txt /app

# Install project dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt


COPY . /app

# Chmod to entrypoint.sh
RUN chmod +x ./entrypoint.sh

# Run entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
