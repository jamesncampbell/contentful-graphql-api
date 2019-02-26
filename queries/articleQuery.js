const graphql = require('graphql');
const fetchArticle = require('../fetchers/fetchArticle');
const Types = require('../types');

const { ArticleType } = Types;
const { GraphQLString, GraphQLNonNull } = graphql;

module.exports = {
  type: ArticleType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, args) {
    return fetchArticle.get(`/entries?sys.id=${args.id}&include=3`)
      .then(res => res.data);
  },
};
