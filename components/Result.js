import Styles from "../styles/result.module.css";

const Result = ({ result }) => {
  return (
    <div className={Styles.main}>
      <h2>{result.message}</h2>
      <h3>Remaining Time: {result.data.remaining_time}</h3>
      <h1>Score: {result.data.score}</h1>
    </div>
  );
};

export default Result;
