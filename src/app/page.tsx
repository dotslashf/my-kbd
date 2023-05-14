"use client";

import { Provider } from "react-redux";
import store from "../store";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
