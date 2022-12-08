import { v4 } from "uuid";

export default class NotificationService {
  constructor() {
    this.queueID = `notificationsQueue`;
    this.queue = [];
    this.canConsume = true;

    this.msg = {
      uuid: "",
      status: "",
      msg: "",
    };
  }

  add(status, content) {
    this.queue.push({
      uuid: v4(),
      status: status,
      content: content,
    });

    this.consume();
    return;
  }

  consume() {
    if (this.canConsume) {
      this.canConsume = false;
    } else {
      return;
    }

    let msg = null;
    if (this.queue.length > 0) {
      msg = this.queue[0];
    } else {
      return;
    }

    let node = this.createNode(msg);
    this.show(node);

    setTimeout(() => {
      this.dismiss(msg.uuid);
      this.canConsume = true;

      setTimeout(() => {
        this.consume();
      }, 500);
    }, 2000);
  }

  show(node) {
    let div = document.getElementById(this.queueID);
    div.appendChild(node);
    return;
  }

  dismiss(uuid) {
    this.queue.forEach((msg, i) => {
      if (msg.uuid === uuid) {
        this.queue.splice(i, 1);
        document
          .getElementById(this.queueID)
          .removeChild(document.getElementById(`notification`));
      }
    });
  }

  createNode(msg) {
    let node = document.createElement("div");
    node.className = `notification bg-${msg.status.toLowerCase()} text-light`;
    node.id = "notification";
    node.onclick = () => {
      this.dismiss(msg.uuid);
    };
    node.innerHTML = `
    <h4>${msg.status}</h4>
    <small>${msg.content}</small>
    `;

    return node;
  }
}
