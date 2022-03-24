import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Day = props => {
  const navigate = useNavigate();

  // 랜덤함수를 이용해 0~4까지의 수를 지정합니다.
  let rand = parseInt(Math.random() * 5);
  return (
    <div className="flex-row" style={{ margin: "10px 0" }}>
      <div style={{ fontWeight: "bold" }}>{props.day}</div>
      {Array.from({ length: 5 }, (_, i) => {
        return rand >= i ? <Circle bc="#fff010" key={`daysCircle${i}`} /> : <Circle key={`daysCircle${i}`} />;
      })}
      <Tri onClick={() => navigate("/detail/" + props.day)}></Tri>
    </div>
  );
};

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => (props.bc ? props.bc : "#ddd")};
  border-radius: 50px;
  border: none;
  margin: 0 5px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const Tri = styled.div`
  background-color: transparent;
  border-color: transparent #ff6e60;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1);
  }
`;

export default Day;
