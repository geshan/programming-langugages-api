FROM node:14-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

COPY . ./
EXPOSE 8080
CMD ["node", "index.js"]
