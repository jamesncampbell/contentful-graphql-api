const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  ArticlePreviewType,
  ArticleType,
} = require('..');

describe('ArticlePreviewType', () => {
  it('Should have an id field of type String', () => {
    expect(ArticlePreviewType.getFields()).to.have.property('id');
    expect(ArticlePreviewType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a customTitle field of type String', () => {
    expect(ArticlePreviewType.getFields()).to.have.property('customTitle');
    expect(ArticlePreviewType.getFields().customTitle.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a hideThumbnailImage field of type Boolean', () => {
    expect(ArticlePreviewType.getFields()).to.have.property('hideThumbnailImage');
    expect(ArticlePreviewType.getFields().hideThumbnailImage.type).to.deep.equals(graphql.GraphQLBoolean);
  });

  it('Should have an article field of type ArticleType', () => {
    expect(ArticlePreviewType.getFields()).to.have.property('article');
    expect(ArticlePreviewType.getFields().article.type).to.deep.equals(ArticleType);
  });
})
