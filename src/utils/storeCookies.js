import Cookies from "universal-cookie";

const cookies = new Cookies();
export const storeCookies = (data) => {
  if (data) {
    cookies.set("jwt_token", data, {
      path: "/",
      sameSite: "strict",
      expires: new Date(new Date().getTime() + 100000 * 60),
      secure: true,
    });
    console.log("Token stored in cookies");
  } else {
    console.log("Token not found for cookies");
  }
};

export const removeCookies = () => {
  cookies.remove("jwt_token", { path: "/" });
};
