FROM node:12.8.0-alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY config.json .
RUN ls -al
RUN npm i

EXPOSE 4000
RUN ls -al /app
CMD npm run start:dev
