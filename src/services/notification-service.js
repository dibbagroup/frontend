import { v4 } from "uuid";

export default class NotificationService {
  constructor() {
    this.queueID = `notificationsQueue`;
  }

  consume(status, content) {
    let msg = {
      uuid: v4(),
      status: status,
      content: content,
    };

    let node = this.createNode(msg);
    this.show(node);

    setTimeout(() => {
      this.dismiss(node);
      return;
    }, 2000);
  }

  show(node) {
    let div = document.getElementById(this.queueID);
    div.appendChild(node);
    return;
  }

  dismiss(node) {
    let div = document.getElementById(this.queueID);
    div.removeChild(node);
    return;
  }

  createNode(msg) {
    let node = document.createElement("div");
    node.className = `notification bg-${msg.status.toLowerCase()} text-light text-center`;
    node.id = "notification";
    node.onclick = () => {
      this.dismiss(msg.uuid);
    };
    node.innerHTML = `
    <p>${msg.content}</p>
    `;

    return node;
  }
}
