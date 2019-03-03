const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  PageType,
  PageModuleType,
} = require('..');

describe('PageType', () => {
  it('Should have an id field of type String', () => {
    expect(PageType.getFields()).to.have.property('id');
    expect(PageType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a name field of type String', () => {
    expect(PageType.getFields()).to.have.property('name');
    expect(PageType.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a slug field of type String', () => {
    expect(PageType.getFields()).to.have.property('slug');
    expect(PageType.getFields().slug.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a pageTitle field of type String', () => {
    expect(PageType.getFields()).to.have.property('pageTitle');
    expect(PageType.getFields().pageTitle.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a modules field that holds a list of type PageModuleType', () => {
    expect(PageType.getFields()).to.have.property('modules');
    expect(PageType.getFields().modules.type).to.deep.equals(graphql.GraphQLList(PageModuleType));
  });
});
