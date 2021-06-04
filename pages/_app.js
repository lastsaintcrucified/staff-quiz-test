import { useState } from "react";
import { AppContext } from "../components/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState("");
  const value = { token, setToken };
  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
