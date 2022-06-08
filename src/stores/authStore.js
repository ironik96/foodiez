import { makeAutoObservable } from "mobx";
import instance from "./instance";
import jwt_decode from "jwt-decode";

const tokenKey = "token";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
    this.setUser();
  }

  user = null;

  signup = async (userData) => {
    const response = await instance
      .post("/signup", userData)
      .catch((e) => console.error(e.message));
    this._assignUser(response.data);
  };

  signin = async (userData) => {
    const response = await instance
      .post("/signin", userData)
      .catch((e) => console.error(e.message));
    this._assignUser(response.data);
  };

  signout = () => {
    this.user = null;
    delete instance.defaults.headers.common["Authorization"];
    localStorage.removeItem(tokenKey);
  };

  setUser = () => {
    const token = localStorage.getItem(tokenKey);
    if (!token) return;
    if (!this._isValidToken(token)) return localStorage.removeItem(tokenKey);
    this._assignUser(token);
  };

  _assignUser = (token) => {
    localStorage.setItem(tokenKey, token);
    instance.defaults.headers.common["Authorization"] = token;
    this.user = jwt_decode(token);
  };

  _isValidToken = (token) => {
    const { exp } = jwt_decode(token);
    return Date.now() < exp;
  };
}

export default new AuthStore();
