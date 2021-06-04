import Link from "next/link";
import { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import Styles from "../styles/register.module.css";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
  });
  const context = useContext(AppContext);
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.password !== data.password_confirmation) {
      return alert("password must match!");
    }

    fetch("https://backend.imentalhealth.net/api/register/student", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((raw) => {
        context.setToken(raw.data.token);
      });
  };
  console.log(context.token);
  return (
    <>
      <div className={Styles.main}>
        <h1>Let's Start</h1>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
          <label>Email</label>
          <input
            type="text"
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
          <label>Confirm-Password</label>
          <input
            type="password"
            name="password_confirmation"
            onChange={handleChange}
            value={data.password_confirmation}
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={data.phone}
          />
          <button type="submit" className={Styles.btn}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
