import Link from "next/link";
import styles from "./mypage.module.css";

export default function GoToSub({ location, src, iconName, clplus }) {
  let classes;
  if (!clplus) {
    classes = styles.gotobox_subbox;
  } else {
    classes = `${styles.gotobox_subbox} ${styles.gotobox_write}`;
  }
  return (
    <Link href={location} className={classes}>
      <div className={styles.gotobox_icon}>
        <img src={src} alt={iconName} />
      </div>
      <div className={styles.gotobox_iconname}>{iconName}</div>
    </Link>
  );
}
