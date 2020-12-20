import Axios from "axios";

export const AuthUser = (username, password) =>
  Axios.post("/api/user/login", { username, password });

export const LogoutUser = () => Axios.post("/api/user/logout");
