"use client";

import { useEffect, useState } from "react";
import _ from "lodash";
import Word from "./Word";
import Counter from "./Counter";
import styles from "./page.module.css";

const getRandomNumber = () => {
  return _.random(0, 492);
};

export default function Game() {
  const [data, setData] = useState<DataProps[]>([]);
  const [dataId, setDataId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/game`);
      const newData = await response.json();
      setData(newData);
    };

    getData();
  }, []);

  useEffect(() => {
    const randomNumber = getRandomNumber();
    setDataId(randomNumber);
  }, []);

  const handleCounterClick = () => {
    const randomNumber = getRandomNumber();
    setDataId(randomNumber);
  };

  return (
    <>
      <div className={styles.center}>
        <Word data={data} dataId={dataId} />
      </div>
      <div className={styles.center}>
        <Counter handleCounterClick={handleCounterClick} />
      </div>
    </>
  );
}
