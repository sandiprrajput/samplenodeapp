FROM node:8.11.1

# install dependencies
# ADD . .
WORKDIR usr/src/testapp

COPY package*.json ./

RUN npm install

# copy app source to image _after_ npm install so that
COPY ./ ./


EXPOSE 3000

CMD [ "npm", "run", "start" ]