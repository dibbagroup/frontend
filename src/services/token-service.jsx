export default class TokenService {
  constructor() {
    this.tokenKey = process.env.REACT_APP_SESSION_STORAGE_TOKEN_KEY;
  }

  get() {
    return sessionStorage.getItem(this.tokenKey);
  }

  set(value) {
    sessionStorage.setItem(this.tokenKey, value);
  }

  remove() {
    sessionStorage.removeItem(this.tokenKey);
  }
}
