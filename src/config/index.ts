interface IAuthEnvConfig {
  domain: string;
  audience: string;
  clientID: string;
  redirectUri: string;
  responseType: string;
  scope: string;
}

interface IConfig {
  AuthEnv: IAuthEnvConfig;
}

const AuthEnv: IAuthEnvConfig = {
  domain: '',
  audience: '',
  clientID: '',
  redirectUri: '',
  responseType: '',
  scope: ''
};

export const Config: IConfig = {
  AuthEnv
};
