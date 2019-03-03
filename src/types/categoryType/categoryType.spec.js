const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  CategoryType,
} = require('..');

describe('CategoryType', () => {
  it('Should have an id field of type String', () => {
    expect(CategoryType.getFields()).to.have.property('id');
    expect(CategoryType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a name field of type String', () => {
    expect(CategoryType.getFields()).to.have.property('name');
    expect(CategoryType.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a slug field of type String', () => {
    expect(CategoryType.getFields()).to.have.property('slug');
    expect(CategoryType.getFields().slug.type).to.deep.equals(graphql.GraphQLString);
  });
});
