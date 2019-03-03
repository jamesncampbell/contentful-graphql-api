const sandbox = require('sinon').createSandbox();

const ArticleBySlug = require('./articleBySlugQuery');
const api = require('../api');

describe('ArticleBySlugQuery resolver', () => {
  beforeEach(() => {
    sandbox.stub(api, 'getEntries').resolves({});
    sandbox.stub(api, 'getEntry').resolves({});
  });
  afterEach(() => sandbox.restore());

  it('Should call getEntries when an id has been provided', () => {
    ArticleBySlug.resolve(null, { slug: 'article_url' });
    sandbox.assert.calledOnce(api.getEntries);
  });
});
