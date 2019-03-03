const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  AuthorType,
  ImageType,
} = require('..');

describe('AuthorType', () => {
  it('Should have an id field of type String', () => {
    expect(AuthorType.getFields()).to.have.property('id');
    expect(AuthorType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });
  it('Should have an name field of type String', () => {
    expect(AuthorType.getFields()).to.have.property('name');
    expect(AuthorType.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });
  it('Should have an slug field of type String', () => {
    expect(AuthorType.getFields()).to.have.property('slug');
    expect(AuthorType.getFields().slug.type).to.deep.equals(graphql.GraphQLString);
  });
  it('Should have an title field of type String', () => {
    expect(AuthorType.getFields()).to.have.property('title');
    expect(AuthorType.getFields().title.type).to.deep.equals(graphql.GraphQLString);
  });
  it('Should have an bio field of type String', () => {
    expect(AuthorType.getFields()).to.have.property('bio');
    expect(AuthorType.getFields().bio.type).to.deep.equals(graphql.GraphQLString);
  });
  it('Should have an linkedinUrl field of type String', () => {
    expect(AuthorType.getFields()).to.have.property('linkedinUrl');
    expect(AuthorType.getFields().linkedinUrl.type).to.deep.equals(graphql.GraphQLString);
  });
  it('Should have an twitterHandle field of type String', () => {
    expect(AuthorType.getFields()).to.have.property('twitterHandle');
    expect(AuthorType.getFields().twitterHandle.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have an image field of type ImageType', () => {
    expect(AuthorType.getFields()).to.have.property('image');
    expect(AuthorType.getFields().image.type).to.deep.equals(ImageType);
  });
})
