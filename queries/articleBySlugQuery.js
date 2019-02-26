
const graphql = require('graphql');
const fetchArticle = require('../fetchers/fetchArticle');
const Types = require('../types');

const { GraphQLNonNull, GraphQLString } = graphql;
const { ArticleType } = Types;

module.exports = {
  type: ArticleType,
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, args) {
    return fetchArticle.get(`/entries?content_type=article&fields.slug[match]=${args.slug}&include=3`)
      .then(res => res.data);
  },
};
