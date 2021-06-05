import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppContext, DataContext } from "../components/AppContext";
import Question from "../components/Question";
import Styles from "../styles/quiz.module.css";

const Quiz = () => {
  const contextApp = useContext(AppContext);
  const [quizData, setQuizData] = useState({});
  const [info, setInfo] = useState({});
  const [questions, setQuestions] = useState([]);
  const router = useRouter();
  console.log(contextApp);
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
      setInfo(quizes.data);
      setQuestions(quizes.data.question_tag.questions);
    }
    console.log("quizes-->", quizes);
  }, []);

  return (
    <div>
      {quizData.data
        ? questions.map((q) => {
            return <Question q={q} />;
          })
        : null}
    </div>
  );
};

export default Quiz;
