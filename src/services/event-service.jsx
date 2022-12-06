import useDebounce from "../utils/debounce";
import { doGet, doAwaitGet, doPost } from "../utils/http";
import TokenService from "./token-service";

// TODO: Em todos os métodos deve ser validado se o body está correto
export default class EventService {
  constructor() {
    this.authPath = process.env.REACT_APP_BACKEND_AUTH_PATH;
    this.userPath = process.env.REACT_APP_BACKEND_USER_PATH;
    this.eventPath = process.env.REACT_APP_BACKEND_EVENT_PATH;
    this.tokenService = new TokenService();
  }

  async all() {
    let res = await doAwaitGet(this.eventPath, null);
    return res.data;
  }

  byId(id) {
    const url = `${process.env.REACT_APP_BACK_URL_EVENTS_BY_ID}/${id}`;
    return doAwaitGet(url, null);
  }

  byName(name) {
    const url = `${process.env.REACT_APP_BACK_URL_EVENTS_BY_NAME}/${name}`;
    return doAwaitGet(url, null);
  }

  byMusicalType(musicalType) {
    const url = `${process.env.REACT_APP_BACK_URL_EVENTS_BY_MUSICAL_TYPE}/${musicalType}`;
    return doAwaitGet(url, null);
  }

  byAge(age) {
    const url = `${process.env.REACT_APP_BACK_URL_EVENTS_BY_AGE}/${age}`;
    return doAwaitGet(url, null);
  }

  byCity(city) {
    const url = `${process.env.REACT_APP_BACK_URL_EVENTS_BY_CITY}/${city}`;
    return doAwaitGet(url, null);
  }

  buy(body) {
    return doPost(process.env.REACT_APP_BACK_URL_EVENTS_BUY, body, null);
  }

  sell(body) {
    return doPost(process.env.REACT_APP_BACK_URL_EVENTS_SELL, body, null);
  }

  share() {
    // Sugestão: enviar os dados para um dashboard para ser uma métrica
    navigator.clipboard.writeText(window.location.href);
  }
}

const eventService = new EventService();
