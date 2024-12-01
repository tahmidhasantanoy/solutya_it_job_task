import { baseApi } from "./api/baseApi";
import bodySlice from "./features/body/bodySlice";

export const rootResucer = {
  gym: bodySlice,

  [baseApi.reducerPath]: baseApi.reducer,
};
