"use client";

import React from "react";
import styles from "./page.module.css";

export default function Counter() {
  const [initialTime, setInitialTime] = React.useState(120);
  const [startTimer, setStartTimer] = React.useState(true);

  React.useEffect(() => {
    if (initialTime > 0) {
      setTimeout(() => {
        setInitialTime(initialTime - 1);
      }, 1000);
    }
  }, [initialTime]);

  return <h1>{initialTime}</h1>;
}
