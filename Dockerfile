FROM node:12.14.1-alpine3.9

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
