FROM node:10.15-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm config set unsafe-perm true
RUN npm install express next
RUN npm install -g pm2 --silent

COPY . .
EXPOSE 3000
CMD ["pm2-runtime", "server.js"]