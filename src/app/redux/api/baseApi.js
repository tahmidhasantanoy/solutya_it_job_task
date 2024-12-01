import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "GYMApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: () => ({}),
});

export const {} = baseApi;
