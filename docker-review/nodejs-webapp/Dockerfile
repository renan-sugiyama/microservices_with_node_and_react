# Base image
FROM node:14-alpine

# Set the default directory
WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]