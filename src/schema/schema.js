const graphql = require('graphql');
const articleQuery = require('../queries/articleQuery');
const articleBySlugQuery = require('../queries/articleBySlugQuery');
const pageQuery = require('../queries/pageQuery');

const { GraphQLSchema, GraphQLObjectType } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    article: articleQuery,
    articleBySlug: articleBySlugQuery,
    page: pageQuery,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
