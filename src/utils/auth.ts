import auth0 from 'auth0-js';
import { config } from 'src/config';

class Auth {
  private auth0: auth0.WebAuth;

  constructor() {
    this.auth0 = new auth0.WebAuth(config.AuthEnv);
  }

  login() {
    this.auth0.authorize();
  }

  isAuthenticated() {
    // return new Date().getTime() < expiresAt;
  }

  handleAuthentication() {
    try {
      return new Promise((resolve, reject) => {
        this.auth0.parseHash((err, authResult) => {
          if (err) return reject(err);
          if (!authResult || !authResult.idToken) {
            return reject(err);
          }
          this.setTokenInfo(authResult);
          resolve();
        });
      });
    } catch (error) {
      throw error;
    }
  }

  setTokenInfo(authResult: auth0.Auth0DecodedHash) {
    const profile = authResult.idTokenPayload;
    const idToken = authResult.idToken;
    const expiresAt = authResult.idTokenPayload.exp * 1000;
  }

  performLogout() {}
}

const AuthInstance = new Auth();

export default AuthInstance;
