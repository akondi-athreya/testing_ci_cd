FROM node:22-alpine

WORKDIR /var/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5454

CMD [ "npm", "start" ]