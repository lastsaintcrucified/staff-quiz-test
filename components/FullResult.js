import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "./AppContext";
import DetailResult from "./DetailResult";
import Styles from "../styles/fullResult.module.css";

const FullResult = () => {
  const contextApp = useContext(AppContext);
  const router = useRouter();
  const [result, setResult] = useState({});
  // console.log(contextApp);
  //Fetch results
  useEffect(async () => {
    const res = await fetch(
      `https://backend.imentalhealth.net/api/quiz/1/result`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${contextApp.token}`,
        },
      }
    );
    const raw = await res.json();
    if (raw.message === "Unauthenticated.") {
      router.push("/login");
    }
    setResult({ ...raw });
    // console.log("result", result);
  }, []);
  const handleClick = () => {
    router.push("/login");
  };
  return (
    <div className={Styles.main}>
      <h1>Correct Answers and Detailed result</h1>
      {result.data
        ? result.data.questions.map((r) => (
            <DetailResult key={Math.random()} r={r} />
          ))
        : "Loading..."}
      <button onClick={handleClick} className={Styles.btn}>
        LogOut
      </button>
    </div>
  );
};

export default FullResult;
