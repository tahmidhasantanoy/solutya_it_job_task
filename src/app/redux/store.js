import { configureStore } from "@reduxjs/toolkit";
import { rootResucer } from "./rootReducer";

export const store = configureStore({
  //   reducer: {},
  reducer: rootResucer,
});
