const contentful = require('contentful');

const client = contentful.createClient({
  space: 'mgl1kxuxn1e1',
  accessToken: 'ba12d981a8163174e2c11898e5ae65041433f2914e69d6ff59d95afa7578436c',
});


module.exports = client;
