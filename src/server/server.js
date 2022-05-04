const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const morgan = require('morgan');

const menu = require('./static/menu-data.json');
const gqlSchema = require('./static/gql-schema');

const FRONTEND = process.env.FRONTEND_URL = 'http://localhost:8080';

const app = express();

app.use(
    cors({
        origin: FRONTEND
    })
);

app.use(morgan('common'));

app.get('/api/v1/menu', (req, res) => {
    res.json(menu);
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: buildSchema(gqlSchema),
        rootValue: { menu: () => menu },
        graphiql: true,
    })
);

module.exports = app;