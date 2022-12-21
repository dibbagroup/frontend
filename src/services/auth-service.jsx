import { doPost } from "../utils/http";
import TokenService from "./token-service";

export default class AuthService {
  constructor() {
    this.authPath = process.env.REACT_APP_BACKEND_AUTH_PATH;
    this.userPath = process.env.REACT_APP_BACKEND_USER_PATH;
    this.eventPath = process.env.REACT_APP_BACKEND_EVENT_PATH;
    this.tokenService = new TokenService();
  }

  async signIn(email, password) {

    const body = {
      emailAddress: email,
      password: password,
    };

    let res = await doPost(this.authPath, JSON.stringify(body), null);
    console.log(res)
    if (typeof res === null || typeof res === Error) {
      // Code...
      console.log("erro")
      return
    }
    
    this.tokenService.set(res.jwtToken);
    /* window.location.href = "/" */
    return;
  }

  signOut() {
    this.tokenService.remove();
    return;
  }

  async signUp({
    firstName,
    lastName,
    phone,
    email,
    password,
    docNumber,
  }) {
    const body = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      emailAddress: email,
      password: password,
      role: "CUSTOMER",
      docNumber: docNumber,
    };

    let res = await doPost(this.userPath, body, null);
    /* window.location.href = "/"; */
    return res;
    // TODO: Como continuar o fluxo?
  }
}
