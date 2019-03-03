const graphql = require('graphql');

const Types = require('../types');
const api = require('../api');
const formatter = require('../formatter');

const { ArticleType } = Types;
const { GraphQLString, GraphQLNonNull } = graphql;

module.exports = {
  type: ArticleType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, args) {
    return api.getEntry(`${args.id}`, { include: 3 })
      .then(res => formatter.formatArticleResponse(res));
  },
};
