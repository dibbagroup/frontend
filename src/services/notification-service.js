import { useState } from "react";
import useDebounce from "../utils/debounce";

export default class NotificationService {
  constructor(msg, type) {
    this.msg = msg;
    this.type = type;
  }

  showMessage() {
    return;
  }
}
