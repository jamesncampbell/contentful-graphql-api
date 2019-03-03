const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  RelatedArticleType,
} = require('..');

describe('RelatedArticleType', () => {
  it('Should have an id field of type String', () => {
    expect(RelatedArticleType.getFields()).to.have.property('id');
    expect(RelatedArticleType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a title field of type String', () => {
    expect(RelatedArticleType.getFields()).to.have.property('title');
    expect(RelatedArticleType.getFields().title.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a slug field of type String', () => {
    expect(RelatedArticleType.getFields()).to.have.property('slug');
    expect(RelatedArticleType.getFields().slug.type).to.deep.equals(graphql.GraphQLString);
  });
});
