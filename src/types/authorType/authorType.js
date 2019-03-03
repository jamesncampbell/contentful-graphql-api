const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const ImageType = require('../imageType/imageType');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    title: { type: GraphQLString },
    bio: { type: GraphQLString },
    linkedinUrl: { type: GraphQLString },
    twitterHandle: { type: GraphQLString },
    image: { type: ImageType },
  }),
});

module.exports = AuthorType;
