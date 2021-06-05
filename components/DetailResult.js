import Style from "../styles/detailResult.module.css";

const DetailResult = ({ r }) => {
  return (
    <div className={Style.main}>
      <h1>
        {r.id}. {r.title}
      </h1>
      <h2>Correct answer: {r.answer.correct.answer}</h2>
      <h3>
        Your answer was: {r.answer.wrong ? r.answer.correct.answer : "correct"}
      </h3>
    </div>
  );
};

export default DetailResult;
