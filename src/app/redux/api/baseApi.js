// Need to use the React-specific entry point to import createApi
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "GYMApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/" }), // Change the base URL depending on the API you're using
  endpoints: () => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = baseApi;
