const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const RelatedArticleType = new GraphQLObjectType({
  name: 'RelatedArticle',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
  }),
});

module.exports = RelatedArticleType;
