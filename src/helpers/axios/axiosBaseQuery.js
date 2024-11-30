import axios from "axios";

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers /* contentType */ }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        /* headers: {
          "Content-Type": contentType || "application/json",
        }, */ //It need for send data
      });

      // return { data: result.data };
      return result;


    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
