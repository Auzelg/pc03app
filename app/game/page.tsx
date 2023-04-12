import Link from "next/link";
import _ from "lodash";
import styles from "./page.module.css";
import Counter from "../components/Counter";
import Word from "../components/Word";

export default function Game() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Word />
      </div>
      <div className={styles.center}>
        <Counter />
      </div>
      <div className={styles.center} style={{ fontSize: "x-small" }}>
        Copyright © Jojo {new Date().getFullYear()}. In-App Purchase available
        in FinBar.
      </div>
    </main>
  );
}
