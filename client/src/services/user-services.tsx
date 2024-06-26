import { CredentialResponse } from "@react-oauth/google";
import apiClient from "./api-client";

export interface UserType {
  email: string;
  password?: string;
  imgUrl?: string;
  _id?: string;
  accessToken?: string;
  refreshToken?: string;
}

export const registrUser = (user: UserType) => {
  return new Promise<UserType>((resolve, reject) => {
    console.log("Registering user...");
    console.log(user);
    apiClient
      .post("/auth/register", user)
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const googleSignin = (credentialResponse: CredentialResponse) => {
  return new Promise<UserType>((resolve, reject) => {
    console.log("googleSignin ...");
    apiClient
      .post("/auth/google", credentialResponse)
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};
