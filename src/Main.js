import React from "react";
import { useNavigate } from "react-router-dom";
import Day from "./Day";

const Main = props => {
  return (
    <>
      <h2>내 일주일 어디갔지...</h2>
      {props.list.map((v, i) => (
        <Day day={v} key={i} />
      ))}
    </>
  );
};

export default Main;
