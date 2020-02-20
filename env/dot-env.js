const dotEnv = require("dotenv");

function getEnvConfig(environment) {
  dotEnv.config({ path: `./.env.${environment}` });

  if (
    process.env.TEST
  ) {
    return {
      TEST: process.env.TEST
    };
  } else {
    let errorMessage = `Cannot find .env.${environment} file or environment values are missing`;
    throw new Error(errorMessage);
  }
}

module.exports = {
  getEnvConfig
};