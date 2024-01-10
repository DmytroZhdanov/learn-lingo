import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

// import { TTeacher } from "shared.types";
import { TState } from "./auth/authSlice";

type TCredentials = {
  email: string;
  password: string;
  displayName?: string;
};

interface IError {
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
    signUp: builder.mutation({
      query: credentials => ({
        url: "/accounts:signUp",
        method: "POST",
        data: credentials,
      }),
    }),
    signIn: builder.mutation({
      query: credentials => ({
        url: "/accounts:signInWithPassword",
        method: "POST",
        data: { ...credentials, returnSecureToken: true },
      }),
    }),
    getIdToken: builder.mutation({
      query: refresh_token => ({
        url: "/token",
        method: "POST",
        data: { grant_type: "refresh_token", refresh_token },
      }),
    }),
    getUserData: builder.mutation({
      query: idToken => ({
        url: "/accounts:lookup",
        method: "POST",
        data: { idToken },
      }),
    }),
    // getAllCars: builder.query<TTeacher[], IQuery>({
    //   query: ({ page = 1, make, language }) => ({
    //     url: `/adverts${language === "uk" ? "-uk" : ""}`,
    //     method: "get",
    //     params: { page, make, limit: 12 },
    //   }),
    // }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetIdTokenMutation,
  useGetUserDataMutation,
} = api;
