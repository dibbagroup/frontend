import axios from "axios";

let headers = {
  Authorization: "",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  Accept: "application/json",
};

export const doGet = async (path, token) => {
  headers.Authorization = token;
  await axios
    .get(`${process.env.REACT_APP_BACKEND_URL_BASE}/${path}`, { headers })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const doAwaitGet = async (path, token) => {
  headers.Authorization = token;
  let result = null;
  await axios
    .get(`${process.env.REACT_APP_BACKEND_URL_BASE}/${path}`, { headers })
    .then((res) => {
      result = res;
    })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const doPost = async (path, data, config) => {
  let result = null;
  await axios
    .post(`${process.env.REACT_APP_BACKEND_URL_BASE}/${path}`, data, {
      headers,
      ...config,
    })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      result = err;
    });

  return result;
};

export const doPut = (path, data, config) => {
  axios
    .put(`${process.env.REACT_APP_BACKEND_URL_BASE}/${path}`, data, {
      headers,
      ...config,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const doDelete = (path, data, config) => {
  axios
    .delete(`${process.env.REACT_APP_BACKEND_URL_BASE}/${path}`, data, {
      headers,
      ...config,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
