"use client";

import React from "react";
import _ from "lodash";

export default function Word(props: { data: DataProps[]; dataId: number }) {
  const { data, dataId } = props;
  const result = _.find(data, (o) => o.id === dataId);
  return <div style={{ fontSize: "xxx-large" }}>{result?.word2guess}</div>;
}
