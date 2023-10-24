# Use the official Node.js image as a base image
FROM node:10-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app/app

# Copy package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the entire app into the container
COPY app/ .

# Expose port 5050 for the app (or whatever port your app runs on)
EXPOSE 4000

# Command to run the application
CMD [ "node", "server.js" ]
