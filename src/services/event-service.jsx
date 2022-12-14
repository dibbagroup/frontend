import { doAwaitGet, doPost } from "../utils/http";
import TokenService from "./token-service";

export default class EventService {
  constructor() {
    this.authPath = process.env.REACT_APP_BACKEND_AUTH_PATH;
    this.userPath = process.env.REACT_APP_BACKEND_USER_PATH;
    this.eventPath = process.env.REACT_APP_BACKEND_EVENT_PATH;

    this.events = [];

    this.tokenService = new TokenService();
  }

  async getAll() {
    let res = await doAwaitGet(this.eventPath, null);
    if (res.data === undefined || res.data === null) {
      this.events = [];
      return this.events;
    }

    this.events = res.data;
    return this.events;
  }

  async getById(id) {
    if (id === null) {
      id = this.getIdFromURL();
    }

    let res = await doAwaitGet(
      `${process.env.REACT_APP_BACK_URL_EVENTS_BY_ID}/${id}`,
      null
    );

    return res.data;
  }

  buy(body) {
    return doPost(process.env.REACT_APP_BACK_URL_EVENTS_BUY, body, null);
  }

  // sell(body) {
  //   return doPost(process.env.REACT_APP_BACK_URL_EVENTS_SELL, body, null);
  // }

  share() {
    // Sugestão: enviar os dados para um dashboard para ser uma métrica
    navigator.clipboard.writeText(window.location.href);
  }

  getIdFromURL() {
    const url = window.location.href;
    const word = "tests/";
    const index = url.indexOf(word);
    return url.slice(index + word.length, url.length).toString();
  }
}
