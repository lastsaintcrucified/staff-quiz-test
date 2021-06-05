import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../components/AppContext";
import Styles from "../styles/register.module.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const context = useContext(AppContext);
  const router = useRouter();
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", data);

    fetch("https://backend.imentalhealth.net/api/login/student", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((raw) => {
        if (raw.data.token) {
          context.setToken(raw.data.token);
          router.push("/quiz");
        }
      });
  };
  return (
    <>
      <div className={Styles.main}>
        <h1>Let's Start</h1>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
          <button type="submit" className={Styles.btn}>
            Log In
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
