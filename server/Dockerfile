FROM node:alpine
WORKDIR /usr/server

COPY package.json ./
RUN npm install && npm install mongodb
COPY . .

EXPOSE 4000

CMD [ "node", "server" ]