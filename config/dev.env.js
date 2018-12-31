'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"DEV"',
  API_PATH: '"https://localhost:9050/api"',
  PUBLIC_PATH: '"https://localhost:9050/dist"'
});
