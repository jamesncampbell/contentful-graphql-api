require('module-alias/register');
const express = require('express');
const expressGraphQL = require('express-graphql');
const Chalk = require('chalk');

const schema = require('@schema');


const app = express();
const port = 3000;

app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema,
}));

app.listen(port, () => {
  console.log(`Express-GraphQL server has started on ${Chalk.bold.blue(`http://localhost:${port}/`)}`);
});
