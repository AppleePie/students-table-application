FROM node:alpine
WORKDIR /usr/src/

COPY package*.json ./
RUN npm install
RUN npm install react-bootstrap-table --save
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]