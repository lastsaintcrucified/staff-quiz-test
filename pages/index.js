import Head from "next/head";
import Register from "../components/Register";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Register />
    </div>
  );
}
