const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  TagType,
} = require('..');

describe('TagType', () => {
  it('Should have an id field of type String', () => {
    expect(TagType.getFields()).to.have.property('id');
    expect(TagType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a name field of type String', () => {
    expect(TagType.getFields()).to.have.property('name');
    expect(TagType.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a slug field of type String', () => {
    expect(TagType.getFields()).to.have.property('slug');
    expect(TagType.getFields().slug.type).to.deep.equals(graphql.GraphQLString);
  });
});
