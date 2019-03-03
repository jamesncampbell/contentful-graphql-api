const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const ArticleType = require('../articleType/articleType');

const CuratedSpaceType = new GraphQLObjectType({
  name: 'CuratedSpace',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    articles: { type: new GraphQLList(ArticleType) },
  }),
});

module.exports = CuratedSpaceType;
