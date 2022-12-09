FROM node:19-alpine

WORKDIR /starx-frontend

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
