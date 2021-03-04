FROM node:14-alpine

WORKDIR /src
COPY package*.json ./
EXPOSE 3000

ENV NODE_ENV=production
RUN npm ci
COPY . ./
CMD ["node", "index.js"]
