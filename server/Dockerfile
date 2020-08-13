FROM node:alpine
WORKDIR /usr/server
RUN mkdir /usr/uploads/
COPY package.json ./
RUN npm install && npm install mongodb && npm install express multer
RUN npm install mongoose --save
COPY . .

EXPOSE 4000

CMD node server