const request = require('async-request');
const h2p = require('html2plaintext');

const BASE_URL = 'https://www.planet-records.com';

module.exports.handler = async (event, context) => {
  const { includeNSFW = 'false' } = event.queryStringParameters;
  const url = `${BASE_URL}/random-band-name?includeNSFW=${includeNSFW}`;
  const { error, statusCode, body } = await request(url);
  return {
    error,
    statusCode,
    body: JSON.stringify({
      bandName: h2p(body),
    }),
  };
};
