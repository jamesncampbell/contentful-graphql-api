const util = require('util');

module.exports.verboseConsole = (outputMessage, object) => (
  console.warn(outputMessage, util.inspect(object, {
    showHidden: false, depth: null, colors: true, maxArrayLength: null,
  }))
);
