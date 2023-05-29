# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY frontend/package*.json ./

# Install dependencies

# Copy the rest of the application files to the container
WORKDIR /app/frontend/

RUN rm -rf node_modules
# Build the application for production
RUN npm ci
RUN npm run build


# Expose port 3000 to the Docker host
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Start frontend
CMD ["npm", "run", "start"]