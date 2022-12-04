import HttpService from "./http-service";

export default class EventService {
  constructor() {
    this.response = null;
    this.httpService = new HttpService();
  }

  GetAllEvents() {
    console.log("[*] [GET] All events");

    this.response = this.httpService.doGet(process.env.BACKEND_URL_EVENTS_ALL);

    if (typeof this.response === Error) return [];

    return this.response;
  }

  GetEventbyId(id) {
    console.log("[*] [POST] Event by id");

    this.response = this.httpService.doPost(
      process.env.BACKEND_URL_EVENTS_BY_ID,
      { id: id },
      null
    );

    if (typeof this.response === Error)
      return Error("an error occurred while getting details from this event");

    return this.response;
  }

  BuyTicket() {
    console.log("[*] [POST] Buy ticket");

    let date = new Date();
    let body = {
      event_id: null,
      payment_method: null,
      buy_at: date.getUTCDate(),
      // ...
    };

    this.response = this.httpService.doPost(
      process.env.BACKEND_URL_EVENTS_CREATE,
      body,
      null
    );

    if (typeof this.response === Error)
      return Error("an error occurred to buy this event");

    return this.response;
  }

  SellTicket() {
    console.log("[*] [POST] Sell ticket");

    let date = new Date();
    let body = {
      event_id: null,
      payment_method: null,
      sell_at: date.getUTCDate(),
      // ...
    };

    this.response = this.httpService.doPost(
      process.env.BACKEND_URL_EVENTS_SELL,
      body,
      null
    );

    if (typeof this.response === Error)
      return Error("an error occurred to sell your ticket");

    return this.response;
  }
}
