import Link from "next/link";
import styles from "./Arrow.module.css";

export default function Arrow({ location, mod }) {
  return (
    <>
      <Link href={location}>
        <div className={mod == 1 ? styles.arrow1 : styles.arrow2}>
          <div className={styles.one} />
          <div className={styles.two} />
          <div className={styles.three} />
        </div>
      </Link>
    </>
  );
}
