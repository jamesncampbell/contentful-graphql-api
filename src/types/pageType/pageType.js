const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const PageModuleType = require('../pageModuleType/pageModuleType');

const PageType = new GraphQLObjectType({
  name: 'PageType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    pageTitle: { type: GraphQLString },
    modules: {
      type: new GraphQLList(PageModuleType),
      resolve(parentValue) {
        return parentValue.modules;
      },
    },
  }),
});

module.exports = PageType;
