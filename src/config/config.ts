interface IAuthEnvConfig {
  domain: string;
  audience: string;
  clientID: string;
  redirectUri: string;
  responseType: string;
  scope: string;
}

interface IApiEnvConfig {
  baseURL: string;
  timeout: number;
}

interface IConfig {
  ApiEnv: IApiEnvConfig;
  AuthEnv: IAuthEnvConfig;
}

const ApiEnv: IApiEnvConfig = {
  baseURL: envConfig.BASE_URL,
  timeout: +envConfig.TIMEOUT
};

const AuthEnv: IAuthEnvConfig = {
  domain: envConfig.DOMAIN,
  audience: envConfig.AUDIENCE,
  clientID: envConfig.CLIENT_ID,
  redirectUri: envConfig.REDIRECT_URI,
  responseType: envConfig.RESPONSE_TYPE,
  scope: envConfig.SCOPE
};

export const config: IConfig = {
  AuthEnv,
  ApiEnv
};
