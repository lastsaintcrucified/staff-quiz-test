import Styles from "../styles/register.module.css";

const Login = () => {
  return (
    <>
      <div className={Styles.main}>
        <h1>Let's Start</h1>
        <form className={Styles.form}>
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="Password" name="Password" />
        </form>
        <button className={Styles.btn}>Log In</button>
      </div>
    </>
  );
};
export default Login;
