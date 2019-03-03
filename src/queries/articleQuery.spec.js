const sandbox = require('sinon').createSandbox();

const Article = require('./articleQuery');
const api = require('../api');

describe('ArticleQuery resolver', () => {
  beforeEach(() => {
    sandbox.stub(api, 'getEntry').resolves({});
  });
  afterEach(() => sandbox.restore());

  it('Should call getEntry when an id has been provided', () => {
    Article.resolve(null, { id: '1' });
    sandbox.assert.calledOnce(api.getEntry);
  });
});
