/* eslint-disable import/no-mutable-exports */
// https://xiyuer.club
let config = {
  development: {
    baseUrl: 'http://localhost:80',
    timeOut: 10000,
  },
  test: {
    baseUrl: 'http://localhost:80',
    timeOut: 10000,
  },
  production: {
    baseUrl: 'https://xiyuer.club',
    timeOut: 10000,
  },
};
let env = config[process.env.NODE_ENV!];

export default env;
