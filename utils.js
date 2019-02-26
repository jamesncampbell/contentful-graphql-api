const util = require('util');

const serverObjectDebugger = (outputMessage, object) => (
  console.warn(outputMessage, util.inspect(object, {
    showHidden: false, depth: null, colors: true, maxArrayLength: null,
  }))
);

module.exports = {
  serverObjectDebugger,
};
