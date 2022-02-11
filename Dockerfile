FROM node:14-alpine

WORKDIR /server
COPY index.js /server
COPY package.json /server
RUN npm uninstall npm -g

CMD ["node", "index.js"]
