const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = graphql;

const AuthorType = require('../authorType/authorType');
const ImageType = require('../imageType/imageType');
const CategoryType = require('../categoryType/categoryType');
const TagType = require('../tagType/tagType');

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
    publishDate: { type: GraphQLString },
    author: { type: AuthorType },
    excerpt: { type: GraphQLString },
    featured: { type: GraphQLBoolean },
    featuredSubheader: { type: GraphQLString },
    categories: { type: new GraphQLList(CategoryType) },
    tags: { type: new GraphQLList(TagType) },
    relatedArticles: { type: new GraphQLList(ArticleType) },
    heroImage: { type: ImageType },
    customOpenGraphImage: { type: ImageType },
    thumbnailImage: { type: ImageType },
    thumbnailWithVideo: { type: GraphQLBoolean },
    body: { type: GraphQLString },
    hideGetStartedModule: { type: GraphQLBoolean },
    hidden: { type: GraphQLBoolean },
    disableSeoIndex: { type: GraphQLBoolean },
    customPageTitle: { type: GraphQLString },
    customCanonicalUrl: { type: GraphQLString },
    customMetaDescription: { type: GraphQLString },
    customMetaKeywords: { type: new GraphQLList(GraphQLString) },
    customOpenGraphTitle: { type: GraphQLString },
    customOpenGraphDescription: { type: GraphQLString },
    customTwitterCardTitle: { type: GraphQLString },
    customTwitterCardImage: { type: ImageType },
  }),
});

module.exports = ArticleType;
