#!/usr/bin/env node
const { execSync } = require('child_process');

let cmd = 'pm2-runtime start ecosystem.config.js';

if (process.env.NODE_ENV !== 'production') {
  cmd = './node_modules/.bin/nodemon ./src/index.js';
}

execSync(cmd, { stdio: 'inherit' });

