"use client";
import { store } from "@/app/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
