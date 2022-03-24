import React from "react";
import Day from "./Day";

const Main = props => {
  // 현재 요일 값을 받아와 day_list를 현재 요일이 앞에오게 정렬합니다.
  let day_list = ["일", "월", "화", "수", "목", "금", "토"];
  let today = new Date().getDay();
  for(let i = 0; i < today; i++) {
    day_list.push(day_list.shift());
  }
  console.log(window)
  return (
    <>
      <h2>내 일주일 어디갔지...</h2>
      {day_list.map((v, i) => (
        <Day day={v} key={`days${i}`} />
      ))}
    </>
  );
};

export default Main;
