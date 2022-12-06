import { doPost } from "../utils/http";
import TokenService from "./token-service";

export default class AuthService {
  constructor() {
    this.authPath = process.env.REACT_APP_BACKEND_AUTH_PATH;
    this.userPath = process.env.REACT_APP_BACKEND_USER_PATH;
    this.eventPath = process.env.REACT_APP_BACKEND_EVENT_PATH;
    this.tokenService = new TokenService();
  }

  async signIn(username, password) {
    /* TODO:

    MUDAR DE:
    {
      "username":"name",
      "password":"pass"
    }

    PARA:
    {
      "username":"name",
      "email": null,
      "password":"pass"
    }

    IDEAL:
    {
      "email": "email",
      "password":"pass"
    }
    
    */
    const body = {
      username: username,
      password: password,
    };

    let res = await doPost(this.authPath, JSON.stringify(body), null);
    this.tokenService.set(res.jwtToken);
    return;
  }

  signOut() {
    this.tokenService.remove();
    return;
  }

  async signUp({
    firstName,
    lastName,
    userName,
    phone,
    email,
    password,
    docNumber,
  }) {
    const body = {
      firstName: firstName,
      lastName: lastName,
      username: userName,
      phone: phone,
      emailAddress: email,
      password: password,
      role: "CUSTOMER",
      docNumber: docNumber,
    };

    let res = await doPost(this.userPath, body, null);
    console.log(res);
  }
}

/*
SIGN UP RESP
{
  "id": "d5b58ad5-f23f-4259-bb3a-4cc713d227c2",
  "firstName": "teste",
  "lastName": "001",
  "username": "teste_001",
  "phone": "0",
  "emailAddress": "dev.teste_001@gmail.com",
  "active": true,
  "role": "CUSTOMER",
  "docNumber": "012345"
}
*/
