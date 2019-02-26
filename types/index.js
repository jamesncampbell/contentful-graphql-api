
const graphql = require('graphql');

const serverConsole = require('../utils').serverObjectDebugger;


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = graphql;

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    title: { type: GraphQLString },
    bio: { type: GraphQLString },
    linkedinUrl: { type: GraphQLString },
    twitterHandle: { type: GraphQLString },
  }),
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
  }),
});

const TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
  }),
});

const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    id: { type: GraphQLString },
    url: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});

const RelatedArticleType = new GraphQLObjectType({
  name: 'RelatedArticle',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    slug: { type: GraphQLString },
  }),
});


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
    heroImage: {
      type: ImageType,
      resolve({ heroImage }, args) {
        if (heroImage) {
          const { id, file, title } = heroImage;
          return {
            id,
            url: file.url,
            title,
          };
        }

        return null;
      },
    },
    customOpenGraphImage: {
      type: ImageType,
      resolve({ customOpenGraphImage }, args) {
        if (customOpenGraphImage) {
          const { id, file, title } = customOpenGraphImage;
          return {
            id,
            url: file.url,
            title,
          };
        }

        return null;
      },
    },
    thumbnailImage: {
      type: ImageType,
      resolve({ thumbnailImage }, args) {
        if (thumbnailImage) {
          const { id, file, title } = thumbnailImage;
          return {
            id,
            url: file.url,
            title,
          };
        }

        return null;
      },
    },
    thumbnailWithVideo: { type: GraphQLBoolean },
    body: { type: GraphQLString },
    hideGetStartedModule: { type: GraphQLBoolean },
    hidden: { type: GraphQLBoolean },
    disableSeoIndex: { type: GraphQLBoolean },
    customPageTitle: { type: GraphQLString },
    customCanonicalUrl: { type: GraphQLString },
    customMetaDescription: { type: GraphQLString },
    customMetaKeywords: {
      type: GraphQLString,
      resolve({ customMetaKeywords }, args) {
        if (customMetaKeywords && customMetaKeywords.length > 0) {
          return customMetaKeywords.join(', ');
        }

        return null;
      },
    },
    customOpenGraphTitle: { type: GraphQLString },
    customOpenGraphDescription: { type: GraphQLString },
    customTwitterCardTitle: { type: GraphQLString },
    customTwitterCardImage: {
      type: ImageType,
      resolve({ customTwitterCardImage }, args) {
        if (customTwitterCardImage) {
          const { id, file, title } = customTwitterCardImage;

          return {
            id,
            url: file.url,
            title,
          };
        }

        return null;
      },
    },
  }),
});

const CuratedSpaceType = new GraphQLObjectType({
  name: 'CuratedSpace',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    articles: { type: new GraphQLList(ArticleType) },
  }),
});


const ArticlePreviewType = new GraphQLObjectType({
  name: 'ArticlePreview',
  fields: () => ({
    id: { type: GraphQLString },
    customTitle: { type: GraphQLString },
    hideThumbnailImage: { type: GraphQLString },
    article: { type: ArticleType },
  }),
});

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

const PageType = new GraphQLObjectType({
  name: 'PageType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    pageTitle: { type: GraphQLString },
    modules: {
      type: new GraphQLList(PageModuleType),
      resolve(parentValue) {
        return parentValue.modules;
      },
    },
  }),
});

module.exports = {
  AuthorType,
  CategoryType,
  TagType,
  ImageType,
  RelatedArticleType,
  ArticleType,
  CuratedSpaceType,
  PageType,
};
