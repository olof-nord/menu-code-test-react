const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const morgan = require('morgan');
const { gql } = require('graphql-request');

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

const exampleQuery =
    gql`
    query Menu {
      menu {
        starters {
          id
          name
          price
        }
        mains {
          id
          name
          price
        }
        desserts {
          id
          name
          price
        }
      }
    }
    `

app.use(
    '/graphql',
    graphqlHTTP({
        schema: buildSchema(gqlSchema),
        rootValue: { menu: () => menu },
        graphiql: {
            defaultQuery: exampleQuery
        },
    })
);

module.exports = app;