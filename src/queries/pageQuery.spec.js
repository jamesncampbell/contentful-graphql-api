const sandbox = require('sinon').createSandbox();

const Page = require('./pageQuery');
const api = require('../api');

describe('PageQuery resolver', () => {
  beforeEach(() => {
    sandbox.stub(api, 'getEntry').resolves({});
  });
  afterEach(() => sandbox.restore());

  it('Should call getEntry when an id has been provided', () => {
    Page.resolve(null, { id: '1' });
    sandbox.assert.calledOnce(api.getEntry);
  });
});
