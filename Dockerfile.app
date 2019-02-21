FROM node:8.9

WORKDIR /usr/local/src/festivalapp

COPY . /usr/local/src/festivalapp

RUN npm install

ENV APP_PORT 8090

ENV DB_PORT 5432
ENV DB_HOST festival-db
ENV DB_USER passwordis1
ENV DB_PASSWORD E17gLAAHWHza2k3h
ENV DB_DATABASE passwordis1

ENV APP_URL=http://festival-ui:8080/

CMD ["./tools/wait-for-it.sh", "festival-db:5432", "--", "./tools/start.sh"]
