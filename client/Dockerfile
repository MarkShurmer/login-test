FROM node:12.8.0-alpine

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i

EXPOSE 3000
RUN ls -al /app
CMD npm run start
