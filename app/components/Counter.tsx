"use client";

import React from "react";
import styles from "./page.module.css";

export default function Counter() {
  const [initialTime, setInitialTime] = React.useState(5);
  const [startTimer, setStartTimer] = React.useState(true);

  React.useEffect(() => {
    if (initialTime > 0) {
      setTimeout(() => {
        console.log("startTime, ", initialTime);
        setInitialTime(initialTime - 1);
      }, 1000);
    }

    /*
    if (initialTime === 0 && startTimer) {
      setStartTimer(false);
      console.log("done", initialTime, startTimer);
    }
    */
  }, [initialTime]);

  return <h2>{initialTime}</h2>;
}
