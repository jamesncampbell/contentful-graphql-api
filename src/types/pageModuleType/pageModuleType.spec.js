const graphql = require('graphql');
const chai = require('chai');

const { expect } = chai;

const {
  PageModuleType,
  ArticlePreviewType,
  CuratedSpaceType,
} = require('..');

describe('PageModuleType', () => {
  it('Should have an id field of type String', () => {
    expect(PageModuleType.getFields()).to.have.property('id');
    expect(PageModuleType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a name field of type String', () => {
    expect(PageModuleType.getFields()).to.have.property('name');
    expect(PageModuleType.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a slug field of type String', () => {
    expect(PageModuleType.getFields()).to.have.property('slug');
    expect(PageModuleType.getFields().slug.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a layout field of type String', () => {
    expect(PageModuleType.getFields()).to.have.property('layout');
    expect(PageModuleType.getFields().layout.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have a type field of type String', () => {
    expect(PageModuleType.getFields()).to.have.property('type');
    expect(PageModuleType.getFields().type.type).to.deep.equals(graphql.GraphQLString);
  });


  it('Should have a displayTitle field of type String', () => {
    expect(PageModuleType.getFields()).to.have.property('displayTitle');
    expect(PageModuleType.getFields().displayTitle.type).to.deep.equals(graphql.GraphQLString);
  });

  it('Should have an articlePreviews field that holds a list of ArticlePreviewType', () => {
    expect(PageModuleType.getFields()).to.have.property('articlePreviews');
    expect(PageModuleType.getFields().articlePreviews.type).to.deep.equals(graphql.GraphQLList(ArticlePreviewType));
  });

  it('Should have a curatedSpaces field that holds a list of CuratedSpaceType', () => {
    expect(PageModuleType.getFields()).to.have.property('curatedSpaces');
    expect(PageModuleType.getFields().curatedSpaces.type).to.deep.equals(graphql.GraphQLList(CuratedSpaceType));
  });
});
