# Specify the base image
FROM node:latest

# Create a directory for the application
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Set the entrypoint to app.js
ENTRYPOINT ["npm","run", "start"] 
