const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  ArticleType,
  AuthorType,
  CategoryType,
  TagType,
  ImageType,
} = require('..');

describe('ArticleType', () => {
  it('Should have an id field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('id');
    expect(ArticleType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a title field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('title');
    expect(ArticleType.getFields().title.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a slug field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('slug');
    expect(ArticleType.getFields().slug.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a publishDate field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('publishDate');
    expect(ArticleType.getFields().publishDate.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have an author field of type AuthorType', () => {
    expect(ArticleType.getFields()).to.have.property('author');
    expect(ArticleType.getFields().author.type).to.deep.equals(AuthorType);
  });

  it('Should have an excerpt field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('excerpt');
    expect(ArticleType.getFields().excerpt.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a featured field of type Boolean', () => {
    expect(ArticleType.getFields()).to.have.property('featured');
    expect(ArticleType.getFields().featured.type).to.deep.equals(graphql.GraphQLBoolean);
  });

  it('Should have a featuredSubheader field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('featuredSubheader');
    expect(ArticleType.getFields().featuredSubheader.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a categories field that holds a list of CategoryType items', () => {
    expect(ArticleType.getFields()).to.have.property('categories');
    expect(ArticleType.getFields().categories.type).to.deep.equals(graphql.GraphQLList(CategoryType))
  });

  it('Should have a tags field that holds a list of TagType items', () => {
    expect(ArticleType.getFields()).to.have.property('tags');
    expect(ArticleType.getFields().tags.type).to.deep.equals(graphql.GraphQLList(TagType));
  });

  it('Should have a relatedArticles field that holds a list of ArticleType items', () => {
    expect(ArticleType.getFields()).to.have.property('relatedArticles');
    expect(ArticleType.getFields().relatedArticles.type).to.deep.equals(graphql.GraphQLList(ArticleType));
  });

  it('Should have a heroImage field of type ImageType', () => {
    expect(ArticleType.getFields()).to.have.property('heroImage');
    expect(ArticleType.getFields().heroImage.type).to.deep.equals(ImageType);
  });

  it('Should have a customOpenGraphImage field of type ImageType', () => {
    expect(ArticleType.getFields()).to.have.property('customOpenGraphImage');
    expect(ArticleType.getFields().customOpenGraphImage.type).to.deep.equals(ImageType);
  });

  it('Should have a thumbnailImage field of type ImageType', () => {
    expect(ArticleType.getFields()).to.have.property('thumbnailImage');
    expect(ArticleType.getFields().thumbnailImage.type).to.deep.equals(ImageType);
  });

  it('Should have a thumbnailWithVideo field of type Boolean', () => {
    expect(ArticleType.getFields()).to.have.property('thumbnailWithVideo');
    expect(ArticleType.getFields().thumbnailWithVideo.type).to.deep.equals(graphql.GraphQLBoolean);
  });

  it('Should have a body field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('body');
    expect(ArticleType.getFields().body.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a hideGetStartedModule field of type Boolean', () => {
    expect(ArticleType.getFields()).to.have.property('hideGetStartedModule');
    expect(ArticleType.getFields().hideGetStartedModule.type).to.deep.equals(graphql.GraphQLBoolean);
  });

  it('Should have a hidden field of type Boolean', () => {
    expect(ArticleType.getFields()).to.have.property('hidden');
    expect(ArticleType.getFields().hidden.type).to.deep.equals(graphql.GraphQLBoolean);
  });

  it('Should have a disableSeoIndex field of type Boolean', () => {
    expect(ArticleType.getFields()).to.have.property('disableSeoIndex');
    expect(ArticleType.getFields().disableSeoIndex.type).to.deep.equals(graphql.GraphQLBoolean);
  });

  it('Should have a customPageTitle field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('customPageTitle');
    expect(ArticleType.getFields().customPageTitle.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a customCanonicalUrl field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('customCanonicalUrl');
    expect(ArticleType.getFields().customCanonicalUrl.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a customMetaDescription field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('customMetaDescription');
    expect(ArticleType.getFields().customMetaDescription.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a customMetaKeywords field that holds a list of String items', () => {
    expect(ArticleType.getFields()).to.have.property('customMetaKeywords');
    expect(ArticleType.getFields().customMetaKeywords.type).to.deep.equals(graphql.GraphQLList(graphql.GraphQLString));
  });

  it('Should have a customOpenGraphTitle field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('customOpenGraphTitle');
    expect(ArticleType.getFields().customOpenGraphTitle.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a customOpenGraphDescription field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('customOpenGraphDescription');
    expect(ArticleType.getFields().customOpenGraphDescription.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a customTwitterCardTitle field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('customTwitterCardTitle');
    expect(ArticleType.getFields().customTwitterCardTitle.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a customTwitterCardImage field of type String', () => {
    expect(ArticleType.getFields()).to.have.property('customTwitterCardImage');
    expect(ArticleType.getFields().customTwitterCardImage.type).to.deep.equals(ImageType);
  });

});;
