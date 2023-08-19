import Link from "next/link";
import styles from "./Gotosub.module.css";

export default function Arrow({ location, src, alt, iconname, clplus }) {
  let classs
  if(alt==undefined) alt=iconname;
  if(clplus==undefined) {
    classs=styles.gotobox_subbox;
  }
  else {
    classs=`${styles.gotobox_subbox} ${clplus}`;
  }
  return (
    <Link href={location} className={classs}>
      <div className={styles.gotobox_icon}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.gotobox_iconname}>{iconname}</div>
    </Link>
  );
}
