import { signIn } from "next-auth/react";
import styles from "./login.module.css";
export default function AnotherLogin({ name }) {
  const socialLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn(e.target.id, {
        redirect: true,
        callbackUrl: "/signup",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`${styles[`login_${name}`]} ${styles.loginanother}`}
      id={name}
      onClick={socialLogin}
    >
      <div className={styles.login_imgsubbox}>
        <img id={name} src={`/images/${name}.png`} alt={name} />
      </div>
      <div className={styles.login_googletxt} id={name}>
        Sign with {name.replace(/^[a-z]/, (char) => char.toUpperCase())}
      </div>
    </div>
  );
}
