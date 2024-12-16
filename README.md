# BRIEF
 
This project demonstrates a Docker Compose setup that can support multiple technology stacks for application and database services. The system is configurable via environment variables(.env file), enabling easy adaptation to different programming languages and database technologies. It follows best practices for containerization, credential management, and modularity.
 
## Features
1. **Technology Stack Independendant Docker compose**:
   - Support for Python or Node.js or any other programming language for the application.
   - Supports MySQL or Redis for the database can be added based on project requirement.
2. **Environment-Specific Configuration**:
   - Uses a '.env' file to store environment-specific variables.
   - Includes an '.env.example' to guide users in creating their own configurations.
3. **Credential Security**:
   - Ensures credentials are excluded from version control.
   - Sensitive data is injected via environment variables.
4. **Concurrency Optimization**:
   - Uses 'wait-for-it.sh' to handle service dependency issues.
5. **Ease of Use**:
   - Clear and modular setup with detailed documentation.
 
 
## Prerequisites
1. Docker and docker compose installed on your system.
2. Clone the repository to your local machine.
3. Copy the '.env.example' file to '.env' and customize it as needed:
 
 
 
## Setup Instructions
 
### Step 1: Configure Environment Variables
Modify the '.env' file to suit your project requirements:
# Sample configuration for python application
```
BASE_IMAGE=python:3.9-slim
DEPENDENCIES=requirements.txt
INSTALL_COMMAND=pip install --no-cache-dir -r requirements.txt
BUILD_COMMAND=python app.py
EXPOSE_PORT=5000
WORK_DIR=/app
CONTEXT=./app
```
 
### Step 2: Build and Run Containers
Run the following command to build and start the services:
 
docker-compose up --build
 
### Step 3: Access the Services
- Application: 'http://localhost:<EXPOSE_PORT>'
- Database: Connect using the credentials defined in the '.env' file.
 
 
 
## Best Practices Followed
1. **Environment File Management**:
   - '.env' is excluded from version control.
   - '.env.example' provides a template for configuration.
2. **Service Dependencies**:
   - 'wait-for-it.sh' ensures dependent services are available before starting the app.
3. **Modular Design**:
   - Separate Dockerfiles for application and database services.
   - Contextual builds to accommodate different stacks.
 
 
 
## Troubleshooting
1. **Service Not Starting**:
   - Verify the '.env' file for errors.
   - Check Docker logs using 'docker-compose logs'.
2. **Dependency Issues**:
   - Ensure 'wait-for-it.sh' has executable permissions:    
3. **Ports in Use**:
   - Change 'EXPOSE_PORT' in '.env' to an unused port or the port not used by system.