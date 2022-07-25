import Cookies from "universal-cookie";

const cookies = new Cookies();
export const getUserCookie = () => {
  return cookies.get("jwt_token");
};
