const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
} = graphql;

const ArticleType = require('../articleType/articleType');

const ArticlePreviewType = new GraphQLObjectType({
  name: 'ArticlePreview',
  fields: () => ({
    id: { type: GraphQLString },
    customTitle: { type: GraphQLString },
    hideThumbnailImage: { type: GraphQLBoolean },
    article: { type: ArticleType },
  }),
});

module.exports = ArticlePreviewType;
