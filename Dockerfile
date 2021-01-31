# The base image to start this image from
FROM node:14

# Set the current working directory to the app folder inside of the image 
WORKDIR /usr/src/app

# Copy the contents of the root folder to the app folder inside of the image
COPY . /usr/src/app

# Install the packages of the application
RUN npm install

# Expose port 3000
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
