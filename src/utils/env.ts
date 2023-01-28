/* eslint-disable import/no-mutable-exports */
// https://xiyuer.club
let config = {
  development: {
    baseUrl: 'https://xiyuer.club',
    timeOut: 10000,
  },
  test: {
    baseUrl: 'https://xiyuer.club',
    timeOut: 10000,
  },
  production: {
    baseUrl: 'https://xiyuer.club',
    timeOut: 10000,
  },
};
let env = config[process.env.NODE_ENV!];

export default env;
