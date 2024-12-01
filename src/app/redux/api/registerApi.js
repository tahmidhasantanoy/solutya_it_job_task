import { baseApi } from "./baseApi";

const registerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    regTrainer: build.mutation({
      query: (data) => ({
        url: "/register-trainer",
        method: "POST",
        data,
        contentType: "application/json",
      }),

      //   overrideExisting: false,
    }),
  }),
});

export const { useRegTrainerMutation } = registerApi;

// const registerApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     regTrainer: build.mutation({
//       query: (data) => ({
//         url: "/register-trainer",
//         method: "POST",
//         data, // Pass the body
//         contentType: "application/json", // Content-Type for JSON
//       }),
//     }),
//   }),
// });

// export const { useRegTrainerMutation } = registerApi;
