import { useState } from "react";
import Styles from "../styles/question.module.css";

const Question = ({ q }) => {
  const [answer, setAnswer] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.currentTarget.value);
    setAnswer({
      ...answer,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  console.log("answer->", answer);
  return (
    <div key={q.id} className={Styles.main}>
      <h1>{q.title}</h1>
      <div className={Styles.inpt}>
        <input
          type="radio"
          id={q.question_options[0].id}
          name={q.id}
          value={q.question_options[0].id}
          onChange={handleChange}
          checked={selectedOption === q.question_options[0].id}
        />
        <label htmlFor={q.question_options[0].id}>
          {q.question_options[0].answer}
        </label>
        <input
          type="radio"
          id={q.question_options[1].id}
          name={q.id}
          value={q.question_options[1].id}
          onChange={handleChange}
          checked={selectedOption === q.question_options[1].id}
        />
        <label htmlFor={q.question_options[1].id}>
          {q.question_options[1].answer}
        </label>
        <input
          type="radio"
          id={q.question_options[2].id}
          name={q.id}
          value={q.question_options[2].id}
          onChange={handleChange}
          checked={selectedOption === q.question_options[2].id}
        />
        <label htmlFor={q.question_options[2].id}>
          {q.question_options[2].answer}
        </label>
        <input
          type="radio"
          id={q.question_options[3].id}
          name={q.id}
          value={q.question_options[3].id}
          onChange={handleChange}
          checked={selectedOption === q.question_options[3].id}
        />
        <label htmlFor={q.question_options[3].id}>
          {q.question_options[3].answer}
        </label>
      </div>
    </div>
  );
};

export default Question;
