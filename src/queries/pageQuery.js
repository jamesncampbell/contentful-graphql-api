const graphql = require('graphql');

const fetch = require('@api');
const Types = require('@types');


const { PageType } = Types;
const { GraphQLString, GraphQLNonNull } = graphql;

module.exports = {
  type: PageType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, args) {
    return fetch.getEntry(`${args.id}`, { include: 5 })
      .then(((res) => {
        const { fields, sys } = res;

        const modules = fields.content.reduce((acc, item) => {
          let layout;
          if (item.sys.contentType.sys.id === 'staticContent') {
            layout = item.fields.type;
          } else {
            ({ layout } = item.fields);
          }

          const module = {
            id: item.sys.id,
            type: item.sys.contentType.sys.id,
            layout,
            name: item.fields.name,
            slug: item.fields.slug,
            displayTitle: item.fields.displayTitle,
            curatedSpaces: item.fields.curatedSpaces && item.fields.curatedSpaces.reduce((curatedSpaceAcc, curatedSpace) => {
              const curatedSpacePreview = {
                id: curatedSpace.sys.id,
                name: curatedSpace.fields.name,
                slug: curatedSpace.fields.slug,
                layout: curatedSpace.fields.layout,
                displayTitle: curatedSpace.fields.displayTitle,
                articles: curatedSpace.fields.articles && curatedSpace.fields.articles.reduce((curatedSpaceArticleAcc, curatedSpaceArticle) => {
                  const article = {
                    id: curatedSpaceArticle.sys.id,
                    title: curatedSpaceArticle.fields.article.fields.title,
                    slug: curatedSpaceArticle.fields.article.fields.slug,
                    publishDate: curatedSpaceArticle.fields.article.fields.publishDate,
                    excerpt: curatedSpaceArticle.fields.article.fields.excerpt,
                    categories: curatedSpaceArticle.fields.article.fields.categories && curatedSpaceArticle.fields.article.fields.categories.reduce((catAcc, category) => {
                      const cat = {
                        slug: category.fields && category.fields.slug,
                        name: category.fields && category.fields.name,
                      };
                      catAcc.push(cat);
                      return catAcc;
                    }, []),
                  };
                  curatedSpaceArticleAcc.push(article);
                  return curatedSpaceArticleAcc;
                }, []),
              };

              curatedSpaceAcc.push(curatedSpacePreview);
              return curatedSpaceAcc;
            }, []),
            articlePreviews: item.fields.articles && item.fields.articles.reduce((previewAcc, preview) => {
              const articlePreview = {
                id: preview.sys.id,
                customTitle: preview.fields.customTitle,
                hideThumbnailImage: preview.fields.hideThumbnailImage,
                article: {
                  id: preview.fields.article.sys.id,
                  slug: preview.fields.article.fields.slug,
                  title: preview.fields.article.fields.title,
                  categories: preview.fields.article.fields.categories.reduce((catAcc, category) => {
                    const cat = {
                      id: category.sys.id,
                      slug: category.fields.slug,
                      name: category.fields.name,
                      description: category.fields.description,
                    };
                    catAcc.push(cat);
                    return catAcc;
                  }, []),
                },
              };

              previewAcc.push(articlePreview);
              return previewAcc;
            }, []),
          };

          acc.push(module);
          return acc;
        }, []);

        const formattedPageResponse = {
          id: sys.id,
          name: fields.name,
          slug: fields.slug,
          pageTitle: fields.slug,
          modules,
        };
        return formattedPageResponse;
      }));
  },
};
