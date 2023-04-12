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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "x-small",
        }}
      >
        <div>Copyright © Jojo {new Date().getFullYear()}.</div>
        <div>In-App Purchase at CS FinBar.</div>
      </div>
    </main>
  );
}
