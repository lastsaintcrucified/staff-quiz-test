import { useState, useEffect } from "react";
import { AppContext, DataContext } from "../components/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState("");
  const [quizesData, setQuizesData] = useState({});
  const value1 = { token, setToken };
  const value2 = { quizesData, setQuizesData };
  return (
    <AppContext.Provider value={value1}>
      <DataContext.Provider value={value2}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </AppContext.Provider>
  );
}

export default MyApp;
