import styles from "./page.module.css";

export default function Loading() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.lds_facebook}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
