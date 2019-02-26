const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const port = 3000;

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema,
}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});