import { configureStore } from "@reduxjs/toolkit";
import { rootResucer } from "./rootReducer";
import { baseApi } from "./api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  //   reducer: {},
  reducer: rootResucer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
