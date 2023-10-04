FROM node:current-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]
