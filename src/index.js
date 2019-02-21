const path = require('path');
const { createServer } = require('http');
const { postgraphile } = require("postgraphile");

require('dotenv').load();

const express = require('express');
const plugins = {};
const PgLDSSourcePlugin = require('@graphile/subscriptions-lds').default;

plugins.PgLDSSourcePlugin = PgLDSSourcePlugin;

const app = express();

app.set('port', process.env.APP_PORT);

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
app.use(postgraphile(connectionString, 'public', {
    simpleSubscriptions: true,
    graphqlRoute: '/graphql',
    enhanceGraphiql: true,
    jwtSecret: 'xxxxxxxx',
    pgDefaultRole: 'anonymous',
    dynamicJson: true,
    live: true,
    ownerConnectionString: connectionString,
    ...(process.env.NODE_ENV !== 'production' ? {
        watchPg: true,
        graphiql: true,
        graphiqlRoute: '/graphiql'
    } : {}),
    appendPlugins: [PgLDSSourcePlugin]
}));

const server = createServer(app);

server.listen(app.get('port'), () => {
    console.log(`Node app is listening on port ${app.get('port')}`);
});
