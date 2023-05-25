# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application for production
RUN npm run generate


# Expose port 3000 to the Docker host
EXPOSE 3000

# Start frontend
CMD ["npm", "run", "start", "--inspect node_modules/.bin/nuxt"]