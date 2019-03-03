const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    id: { type: GraphQLString },
    url: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});

module.exports = ImageType;
