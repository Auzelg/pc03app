"use client";

import React from "react";
import styles from "./page.module.css";

export default function Counter(props: { handleCounterClick: Function }) {
  const [initialTime, setInitialTime] = React.useState(120);
  const [resetTimer, setResetTime] = React.useState(false);

  const { handleCounterClick } = props;

  React.useEffect(() => {
    if (initialTime > 0) {
      const timeoutId = setTimeout(() => {
        setInitialTime(initialTime - 1);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [initialTime]);

  return (
    <div
      onClick={() => {
        handleCounterClick();
        setInitialTime(120);
      }}
      style={{ cursor: "default", fontSize: "x-large" }}
    >
      {initialTime}
    </div>
  );
}
