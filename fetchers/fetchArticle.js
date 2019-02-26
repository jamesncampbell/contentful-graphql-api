const axios = require('axios');

const traverseObject = (obj, func, assets, entries, depth) => {
  if (depth < 10) {
    for (const prop in obj) {
      func.apply(null, [prop, obj, assets, entries]);
      if (obj[prop] !== null && typeof(obj[prop]) === "object") {
          // going one step down in the object tree!!
          traverseObject(obj[prop], func, assets, entries, ++depth);
      }
    }
  }
};

const createLinkHash = links => (
  links.reduce((acc, currValue) => {
    acc[currValue.sys.id] = {
      id: currValue.sys.id,
      ...currValue.fields,
    };

    return acc;
  }, {})
);

const logObjProp = (prop, obj, assets, entries) => {
  if (typeof obj[prop] === 'object' && obj[prop].hasOwnProperty('sys')) {
    const { id, linkType } = obj[prop].sys;

    if (linkType === 'Asset') {
      obj[prop] = assets[id];
    }

    if (linkType === 'Entry') {
      obj[prop] = entries[id];
    }
  }
};

module.exports = axios.create({
  baseURL: 'https://cdn.contentful.com/spaces/mgl1kxuxn1e1',
  headers: {
    Authorization: 'Bearer ba12d981a8163174e2c11898e5ae65041433f2914e69d6ff59d95afa7578436c',
    'Content-Type': 'application/json',
  },
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    const entryHash = createLinkHash(data.includes.Entry);
    const assetHash = createLinkHash(data.includes.Asset);
    let [article] = data.items;

    article = {
      id: article.sys.id,
      ...article.fields,
    };

    traverseObject(article, logObjProp, assetHash, entryHash, 0);
    return article;
  }),
});
