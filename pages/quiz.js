import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppContext, DataContext } from "../components/AppContext";
import Link from "next/link";
import Question from "../components/Question";
import Result from "../components/Result";
import Styles from "../styles/quiz.module.css";
import FullResult from "../components/FullResult";

const Quiz = () => {
  let start = new Date().getTime();
  const router = useRouter();
  const contextApp = useContext(AppContext);
  const [quizData, setQuizData] = useState({});
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState({});
  const [result, setResult] = useState({});
  const [time, setTime] = useState(0);

  console.log(contextApp);

  //Fetch Questions
  useEffect(async () => {
    const slug = "quiz-mock-exam-mental-health-care-mca-dols";
    const res = await fetch(
      `https://backend.imentalhealth.net/api/quiz/${slug}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${contextApp.token}`,
        },
      }
    );
    const quizes = await res.json();
    if (quizes.message === "Unauthenticated.") {
      router.push("/login");
    }
    setQuizData(quizes);
    if (quizes.data) {
      setQuestions(quizes.data.question_tag.questions);
    }
    // console.log("quizes-->", quizes);
  }, []);

  const timeCount = () => {
    let end = new Date().getTime();
    let time = end - start;
    setTime(time / 60000);
  };
  //Post Answers
  const handleClick = () => {
    timeCount();

    const answerData = {
      answer_json: {
        ...answer,
      },
      time_elapsed: Math.round(time),
    };
    fetch("https://backend.imentalhealth.net/api/quiz/1/submit_quiz", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${contextApp.token}`,
      },
      body: JSON.stringify(answerData),
    })
      .then((response) => response.json())
      .then((raw) => {
        setResult(raw);
      });
  };

  console.log("answer->", answer);
  return (
    <div className={Styles.main}>
      <h1>It's Quiz Time!</h1>
      {quizData.data
        ? questions.map((q) => {
            return (
              <Question
                key={q.id}
                q={q}
                answer={answer}
                setAnswer={setAnswer}
              />
            );
          })
        : "Loading..."}
      <button onClick={handleClick} className={Styles.btn}>
        Submit
      </button>
      {result.data ? (
        <>
          <h1>Look Below!!</h1>
          <Result result={result} />
        </>
      ) : null}
      {result.data ? <FullResult /> : null}
    </div>
  );
};

export default Quiz;
