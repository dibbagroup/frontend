import "./http-service";
import TokenService from "./token-service";

export default class AuthenticationService {
  constructor() {
    this.httpService = new HttpService();
    this.tokenService = new TokenService();
  }

  signIn(email, password) {
    console.log("[*] SIGN IN");

    let res = {
      acct: null,
      token: null,
    };

    try {
      res.acct = this.httpService.doPost(process.env.BACKEND_URL_SIGN_IN, {
        email: email,
        password: password,
      });
    } catch (error) {
      return error;
    }

    try {
      res.token = this.tokenService.generate_and_set_token(email, password);
      return res;
    } catch (error) {
      return error;
    }
  }

  signUp(model) {
    console.log("[*] SIGN UP");

    let body = null;
    let res = null;

    // Check if model has correct fields
    try {
      body = {
        email: model.email,
        password: model.password,
      };
    } catch (error) {
      return error;
    }

    try {
      res = this.httpService.doPost(process.env.BACKEND_URL_SIGN_UP, body);
    } catch (error) {
      return error;
    }

    try {
      this.tokenService.generate_and_set_token(body.email, body.password);
      return res;
    } catch (error) {
      return error;
    }
  }

  signOut() {
    console.log("[*] SIGN OUT");

    this.tokenService.delete_token();
  }
}
