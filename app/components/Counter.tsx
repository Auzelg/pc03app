"use client";

import React from "react";
import styles from "./page.module.css";

export default function Counter(props: { handleCounterClick: Function }) {
  const [initialTime, setInitialTime] = React.useState(15);
  const [resetTimer, setResetTimer] = React.useState(false);

  const { handleCounterClick } = props;

  React.useEffect(() => {
    if (initialTime > 0) {
      setTimeout(() => {
        setInitialTime(initialTime - 1);
      }, 1000);
    }
  }, [initialTime]);

  return (
    <div
      onClick={() => {
        handleCounterClick();
        setInitialTime(15);
      }}
      style={{ cursor: "default", fontSize: "x-large" }}
    >
      {initialTime}
    </div>
  );
}
