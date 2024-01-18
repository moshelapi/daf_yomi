FROM node:18-alpine 

WORKDIR /server


COPY ./app/package*.json ./

RUN npm install 

COPY ./app ./


# RUN npm run build

EXPOSE 3000

# CMD ["npm", "run", "start:dev"]

# Base image
# FROM node:18-alpine 

# Create app directory
# WORKDIR /server

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY ./app/package*.json ./


# Install app dependencies
# RUN npm install

# Bundle app source
# COPY ./app .

# RUN cd /server/app/ && echo $(ls)

# RUN cd app

# RUN cd /server/app/app && echo $(ls)

# Creates a "dist" folder with the production build
# RUN npm run build

# Start the server using the production build
# CMD [ "node", "dist/main.js" ]
