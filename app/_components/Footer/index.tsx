import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">News</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">Member</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>
        © SAMPLE Sane-cms. For development purposes only. No rights reserved.
      </p>
    </footer>
  );
}
