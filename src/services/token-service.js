export default class TokenService {
  constructor() {
    this.tokenSessionStorageKey = process.env.SESSION_STORAGE_TOKEN_KEY;
    this.httpService = new HttpService();
  }

  generate_token(email, password) {
    console.log("[*] GENERATE TOKEN");

    return this.httpService.doPost(
      process.env.BACKEND_URL_GENERATE_TOKEN,
      { email: email, password: password },
      null
    );
  }

  generate_and_set_token(email, password) {
    console.log("[*] UPDATE TOKEN");
    let tk = null;

    try {
      tk = this.generate_token(email, password);
    } catch (error) {
      return error;
    }

    this.set_token(tk);
    return this.get_token();
  }

  get_token() {
    console.log("[*] GET TOKEN");

    return sessionStorage.getItem(this.tokenSessionStorageKey);
  }

  set_token(newTokenValue) {
    console.log("[*] SET TOKEN");

    sessionStorage.setItem(this.tokenSessionStorageKey, newTokenValue);
  }

  delete_token() {
    console.log("[*] DELETE TOKEN");

    sessionStorage.removeItem(this.tokenSessionStorageKey);
  }
}
