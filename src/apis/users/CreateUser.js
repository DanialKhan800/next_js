import Api from "../../utils/axios";
import ApiRoutes from "../ApiRoutes";
export const userSignUp = async (payload) => {
  try {
    return await Api.post(`${ApiRoutes.sign_up}`, payload);
  } catch (error) {
    return {
      status: 404,
    };
  }
};

export const userSignIn = async (payload) => {
  try {
    return await Api.post(`${ApiRoutes.sign_in}`, payload);
  } catch (error) {
    return {
      status: 404,
    };
  }
};

export const sendEmail = async (userEmail, token) => {
  try {
    return await Api.post(
      `${ApiRoutes.email}`,
      { email: userEmail },
      {
        headers: {
          Authorization: "Bearer " + token, //the token is a variable which holds the token
        },
      }
    );
  } catch (error) {
    return {
      status: 404,
    };
  }
};
