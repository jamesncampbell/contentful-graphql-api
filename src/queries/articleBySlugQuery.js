
const graphql = require('graphql');

const Types = require('../types');
const api = require('../api');
const formatter = require('../formatter');

const { GraphQLNonNull, GraphQLString } = graphql;
const { ArticleType } = Types;

module.exports = {
  type: ArticleType,
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, args) {
    return api.getEntries({
      'fields.slug': args.slug,
      content_type: 'article',
    }).then((res) => {
      if (res.items && res.items.length) {
        return api.getEntry(`${res.items[0].sys.id}`, { include: 3 })
          .then(response => formatter.formatArticleResponse(response));
      }

      return null;
    });
  },
};
