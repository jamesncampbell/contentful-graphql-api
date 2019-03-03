
const formatter = (() => {
  const formatImage = (image) => {
    if (!image) return null;

    return Object.assign({}, {
      id: image.sys.id,
      title: image.fields.title,
      url: image.fields.file.url,
    });
  };

  const formatCategories = (categories) => {
    if (!categories) return null;

    return categories.reduce((catAcc, category) => {
      const cat = {
        id: category.sys.id,
        name: category.fields.name,
        slug: category.fields.slug,
      };

      catAcc.push(cat);
      return catAcc;
    }, []);
  };

  const formatRelatedArticles = articles => (
    articles.reduce((articleAcc, article) => {
      const relatedArticle = {
        id: article.sys.id,
        title: article.fields.title,
        slug: article.fields.slug,
        categories: formatCategories(article.fields.categories),
      };

      articleAcc.push(relatedArticle);
      return articleAcc;
    }, [])
  );

  const formatAuthor = (author = {}) => (
    Object.assign({}, {
      id: author.sys.id,
      name: author.fields.name,
      slug: author.fields.slug,
      bio: author.fields.bio,
      bioDisplayName: author.fields.bioDisplayName,
      linkedinUrl: author.fields.linkedinUrl,
      twitterHandle: author.fields.twitterHandle,
      image: formatImage(author.fields.authorImage),
    })
  );

  const formatTags = (tags = []) => (
    tags.reduce((tagAcc, tag) => {
      const tagObject = {
        id: tag.sys.id,
        name: tag.fields.name,
        slug: tag.fields.slug,
      };

      tagAcc.push(tagObject);
      return tagAcc;
    }, [])
  );

  return {
    formatArticleResponse: (response = {}) => {
      const { fields, sys } = response;

      if (sys) {
        return {
          id: sys.id,
          slug: fields.slug,
          title: fields.title,
          publishDate: fields.publishDate,
          excerpt: fields.excerpt,
          featured: fields.featured,
          featuredSubheader: fields.featuredSubheader,
          thumbnailWithVideo: fields.thumbnailWithVideo,
          hidden: fields.hidden,
          disableSeoIndex: fields.disableSeoIndex,
          author: formatAuthor(fields.author),
          categories: formatCategories(fields.categories),
          tags: formatTags(fields.tags),
          relatedArticles: formatRelatedArticles(fields.relatedArticles),
          heroImage: formatImage(fields.heroImage),
          customPageTitle: fields.customPageTitle,
          customCanonicalUrl: fields.customCanonicalUrl,
          customMetaDescription: fields.customMetaDescription,
          customMetaKeywords: fields.customMetaKeywords && [...fields.customMetaKeywords],
          customOpenGraphTitle: fields.customOpenGraphTitle,
          customTwitterCardTitle: fields.customTwitterCardTitle,
          customOpenGraphImage: formatImage(fields.customOpenGraphImage),
          customTwitterCardImage: formatImage(fields.customTwitterCardImage),
        };
      }

      return null;
    },
  };
})();


module.exports = formatter;
