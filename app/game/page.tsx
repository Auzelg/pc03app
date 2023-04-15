import Link from "next/link";
import _ from "lodash";
import styles from "./page.module.css";
import Counter from "../components/Counter";
import Word from "../components/Word";
import Game from "../components/Game";

export default async function Genius() {
  return (
    <main className={styles.main}>
      <div>
        <Game />
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
