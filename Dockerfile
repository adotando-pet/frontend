FROM node:12-slim
RUN apt-get update 
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN yarn install
EXPOSE 8000
CMD [ "node", "." ]