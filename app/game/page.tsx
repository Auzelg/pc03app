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
    </main>
  );
}

/*
async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: "no-store",
  });
  const post = await res.json();
  return post;
}
*/
