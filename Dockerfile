FROM node:latest

LABEL author = "gustavo._henrique@hotmail.com"
LABEL version = "1.0.0"

WORKDIR /app/report

COPY . .

RUN yarn install


ENV NODE_ENV=production

RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "vim"]

EXPOSE 3000

ENTRYPOINT [ "yarn", "start:prd" ]