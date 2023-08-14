import styles from "./login.module.css";
export default function AnotherLogin({ name }) {
  return (
    <div className={`${styles[`login_${name}`]} ${styles.loginanother}`}>
      <div className={styles.login_imgsubbox}>
        <img src={`/images/${name}.png`} alt={name} />
      </div>
      <div className={styles.login_googletxt}>
        Sign with {name.replace(/^[a-z]/, (char) => char.toUpperCase())}
      </div>
    </div>
  );
}
