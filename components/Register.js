import Styles from "../styles/register.module.css";

const Register = () => {
  return (
    <>
      <div className={Styles.main}>
        <h1>Let's Start</h1>
        <form className={Styles.form}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Confirm-Password</label>
          <input type="password" name="con-password" />
          <label>Phone</label>
          <input type="number" name="phone" />
        </form>
        <button className={Styles.btn}>Register</button>
      </div>
    </>
  );
};
export default Register;
