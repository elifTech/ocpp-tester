FROM node:lts

RUN npm i -g pm2 babel-cli

COPY . /srv

RUN cd /srv && npm i

WORKDIR /srv

EXPOSE 3000

CMD ["pm2-runtime", "/srv/ecosystem.config.js"]
