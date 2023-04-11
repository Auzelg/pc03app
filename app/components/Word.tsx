"use client";

import React from "react";
import _ from "lodash";

export default function Word() {
  const [word, setWord] = React.useState("");
  const [wordId, setWordId] = React.useState(0);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  React.useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch("/api/game");
      const data = await response.json();
      const randomNumber = getRandomNumber();
      // Exclamation Mark (!) - No way this variable will be undefined or null
      const found = _.find(data, (o) => o.id === randomNumber)!;
      setWord(found.word);
      setWordId(randomNumber);
    };

    fetchWords();
  }, []);

  return <div style={{ fontSize: "xxx-large" }}>{word}</div>;
}
