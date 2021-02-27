const dotEnv = require('dotenv');

function getEnvConfig(environment) {
  dotEnv.config({ path: `./.env.${environment}` });

  if (
    process.env.DOMAIN &&
    process.env.AUDIENCE &&
    process.env.CLIENT_ID &&
    process.env.REDIRECT_URI &&
    process.env.RESPONSE_TYPE &&
    process.env.SCOPE &&
    process.env.BASE_URL &&
    process.env.TIMEOUT
  ) {
    return {
      DOMAIN: process.env.DOMAIN || '',
      AUDIENCE: process.env.AUDIENCE,
      CLIENT_ID: process.env.CLIENT_ID,
      REDIRECT_URI: process.env.REDIRECT_URI,
      RESPONSE_TYPE: process.env.RESPONSE_TYPE,
      SCOPE: process.env.SCOPE,
      BASE_URL: process.env.BASE_URL,
      TIMEOUT: process.env.TIMEOUT
    };
  } else {
    let errorMessage = `Cannot find .env.${environment} file or environment values are missing`;
    throw new Error(errorMessage);
  }
}

module.exports = {
  getEnvConfig
};
