const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;


const TagType = new GraphQLObjectType({
  name: 'Tag',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
  }),
});

module.exports = TagType;
