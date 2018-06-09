# Create the image based on the official Node 10.4.0 image from Dockerhub
FROM node:10.4.0 as node

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /todoapp

# Change directory so that our commands run inside this new directory
WORKDIR /todoapp

# Copy dependency definitions
COPY package.json /todoapp

# Install dependencies using npm
RUN npm install

# Get all the code needed to run the app
COPY . /todoapp
COPY build/* /todoapp/
COPY config/* /todoapp/
COPY dist/* /todoapp/
COPY src/* /todoapp/
COPY test/* /todoapp/
COPY static/* /todoapp/

# Expose the port the app runs in
EXPOSE 8091

#Build the app
RUN npm run build

RUN npm run dev

# CMD ["npm run dev", "node_modules/.bin/nodemon", "-L", "bin/www"]