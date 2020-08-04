FROM node:alpine
WORKDIR /usr/server

COPY package.json ./
RUN npm install && npm install mongodb && npm install express multer
RUN npm install mongoose --save
COPY . .

EXPOSE 4000

CMD sleep 20 && node server