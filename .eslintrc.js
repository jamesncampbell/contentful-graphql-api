module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        "@schema" : './src/schema/schema.js',
        "@api": "./src/api.js",
        "@utils": "./src/utils.js",
        "@formatter": "./src/formatter.js",
        "@types": "./src/types/index.js"
      }
    }
  }
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
  },
};
