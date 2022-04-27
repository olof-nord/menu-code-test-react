const app = require('./server');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The API server is running at http://localhost:${PORT}/api`);
    console.log(`The GraphQL server is running at http://localhost:${PORT}/graphql`);
});
