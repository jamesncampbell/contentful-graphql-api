const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const ArticlePreviewType = require('../articlePreviewType/articlePreviewType');
const CuratedSpaceType = require('../curatedSpaceType/curatedSpaceType');

const PageModuleType = new GraphQLObjectType({
  name: 'PageModule',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    layout: { type: GraphQLString },
    type: { type: GraphQLString },
    displayTitle: { type: GraphQLString },
    articlePreviews: { type: new GraphQLList(ArticlePreviewType) },
    curatedSpaces: { type: new GraphQLList(CuratedSpaceType) },
  }),
});

module.exports = PageModuleType;
