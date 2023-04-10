import styles from "./page.module.css";

export default function Word(props: { word2guess: string }) {
  const { word2guess } = props;
  
  return (
    <div>
      <h1>{word2guess}</h1>
    </div>
  );
}
