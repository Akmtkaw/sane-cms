import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>Page Not Found</dt>
        <dd className={styles.text}>
          The page you tried to access does not exist.
          <br />
          Please check the URL again.
        </dd>
      </dl>
    </div>
  );
}
