import { createContext } from "react";

export const AppContext = createContext({
  token: "",
  setToken: () => {},
});