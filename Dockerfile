# use nodejs 8
FROM node:8
# setup work directory
WORKDIR /usr/src/app
# move files
COPY package*.json ./
RUN npm install
COPY . .
# expose port
ENV NODE_PORT=8080
EXPOSE 8080
CMD ["npm","start"]