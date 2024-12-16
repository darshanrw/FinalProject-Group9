#!/bin/bash

if [ ! -f .env ]; then
    echo "Error: .env file not found. Please create it by copying .env.example and updating the values."
    exit 1
fi
