const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const menu = require('./static/menu-data.json');
const gqlSchema = require('./static/gql-schema');

const app = express();

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