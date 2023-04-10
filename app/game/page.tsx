import Link from "next/link";
import _ from "lodash";
import path from "path";
import { readFile } from "fs/promises";
import styles from "./page.module.css";
import Counter from "../components/Counter";
import Word from "../components/Word";

async function getWords() {
  const jsonDirectory = path.join(process.cwd(), "app/game");
  const fileContents = await readFile(jsonDirectory + "/words.json", "utf8");
  return JSON.parse(fileContents);
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

export default async function Game() {
  const words: { id: number; word: string }[] = await getWords();
  const randomNumber: number = getRandomNumber();

  // Exclamation Mark (!) - No way this variable will be undefined or null
  const guessObject = _.find(words, (o) => o.id === randomNumber)!;
  const word2guess: string = guessObject.word!;
  console.log(new Date());

  return (
    <main className={styles.main}>
      <Link href="/">
        <div className={styles.center}>
          <Word word2guess={word2guess} />
        </div>
        <div className={styles.center}>
          <Counter />
        </div>
      </Link>
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
