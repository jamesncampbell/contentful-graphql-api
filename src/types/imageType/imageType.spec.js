const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  ImageType,
} = require('..');

describe('ImageType', () => {
  it('Should have an id field of type String', () => {
    expect(ImageType.getFields()).to.have.property('id');
    expect(ImageType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a url field of type String', () => {
    expect(ImageType.getFields()).to.have.property('url');
    expect(ImageType.getFields().url.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a title field of type String', () => {
    expect(ImageType.getFields()).to.have.property('title');
    expect(ImageType.getFields().title.type).to.deep.equals(graphql.GraphQLString);
  });
});
