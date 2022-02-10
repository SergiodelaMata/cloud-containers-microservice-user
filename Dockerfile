FROM node:alpine3.10

#App directory creation
WORKDIR /usr/src/cloud-containers-microservice-user

#Maven dependencies installation for the app
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

EXPOSE 3305
CMD ["npm", "start"]