
const graphql = require('graphql');

const Types = require('@types');
const api = require('@api');

const { GraphQLNonNull, GraphQLString } = graphql;
const { ArticleType } = Types;

module.exports = {
  type: ArticleType,
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, args) {
    return api.getEntry(`/entries?content_type=article&fields.slug[match]=${args.slug}&include=3`)
      .then(res => res.data);
  },
};
