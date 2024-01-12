import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { boolean } from "yup";

type TCredentials = {
  email: string;
  password: string;
  displayName?: string;
};

type TResponse = {
  displayName: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
};

type TIdTokenResponse = {
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
};

type TUserData = {
  localId: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  providerUserInfo: {
    providerId: string;
    displayName: string;
    federatedId: string;
    email: string;
    rawId: string;
  };
  photoUrl: string;
  passwordHash: string;
  passwordUpdatedAt: number;
  validSince: string;
  disabled: boolean;
  lastLoginAt: string;
  createdAt: string;
  customAuth: boolean;
};

type TUsersResponse = {
  users: TUserData[];
};

export interface IError {
  status?: number;
  data?: any;
}

const axiosBaseQuery =
  (
    { baseUrl, baseParams }: { baseUrl: string; baseParams: object } = {
      baseUrl: "",
      baseParams: {},
    }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    IError
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params: { ...baseParams, ...params },
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://identitytoolkit.googleapis.com/v1",
    baseParams: { key: import.meta.env.VITE_API_KEY },
  }),
  endpoints: builder => ({
    signUp: builder.mutation<TResponse, TCredentials>({
      query: credentials => ({
        url: "/accounts:signUp",
        method: "POST",
        data: credentials,
      }),
    }),
    signIn: builder.mutation<TResponse, TCredentials>({
      query: credentials => ({
        url: "/accounts:signInWithPassword",
        method: "POST",
        data: { ...credentials, returnSecureToken: true },
      }),
    }),
    getIdToken: builder.mutation<TIdTokenResponse, string>({
      query: refresh_token => ({
        url: "/token",
        method: "POST",
        data: { grant_type: "refresh_token", refresh_token },
      }),
    }),
    getUserData: builder.mutation<TUsersResponse, string>({
      query: idToken => ({
        url: "/accounts:lookup",
        method: "POST",
        data: { idToken },
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetIdTokenMutation,
  useGetUserDataMutation,
} = api;
