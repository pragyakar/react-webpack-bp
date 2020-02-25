declare var environment: string;

declare var envConfig: IEnvConfig;

declare var target: string;

interface IEnvConfig {
  DOMAIN: string;
  AUDIENCE: string;
  CLIENT_ID: string;
  REDIRECT_URI: string;
  RESPONSE_TYPE: string;
  SCOPE: string;
}
