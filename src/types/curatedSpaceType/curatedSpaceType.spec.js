const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  CuratedSpaceType,
  ArticleType,
} = require('..');

describe('CuratedSpaceType', () => {
  it('Should have an id field of type String', () => {
    expect(CuratedSpaceType.getFields()).to.have.property('id');
    expect(CuratedSpaceType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a name field of type String', () => {
    expect(CuratedSpaceType.getFields()).to.have.property('name');
    expect(CuratedSpaceType.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a slug field of type String', () => {
    expect(CuratedSpaceType.getFields()).to.have.property('slug');
    expect(CuratedSpaceType.getFields().slug.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have an articles field that holds of list of ArticleType', () => {
    expect(CuratedSpaceType.getFields()).to.have.property('articles');
    expect(CuratedSpaceType.getFields().articles.type).to.deep.equals(graphql.GraphQLList(ArticleType));
  });
});
