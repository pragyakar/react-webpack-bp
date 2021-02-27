const dotEnv = require('../env/dot-env');

const initEnvironmentVariables = () => {
  return dotEnv.getEnvConfig(process.env.NODE_ENV);
};

(() => {
  const envConfig = initEnvironmentVariables();
  global.envConfig = envConfig;
  global.environment = process.env.NODE_ENV;
})();
