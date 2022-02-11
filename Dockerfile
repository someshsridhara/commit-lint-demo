FROM node:17-alpine

WORKDIR /server
COPY index.js /server
COPY package.json /server

CMD ["node", "index.js"]
