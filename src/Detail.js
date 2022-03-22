import "./App.css";
import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Detail = props => {
  const navigate = useNavigate();
  const day = useParams().day;
  const [grade, setGrade] = React.useState(-1);

  let circle_list = [];
  for (let i = 0; i < 5; i++) {
    circle_list.push(
      grade >= i ? (
        <Circle bc="#fff010" key={i} onClick={() => setGrade(i)} />
      ) : (
        <Circle key={i} onClick={() => setGrade(i)} />
      )
    );
  }

  // 키보드 입력
  window.onkeydown = (e) => {
    if(e.key >= 1 && e.key <= 5)
      setGrade(e.key - 1);
  }

  return (
    <Div className="flex-column">
      <h2>
        <span>{day}요일</span> 평점 남기기
      </h2>
      <div className="flex-row">{circle_list.map(v => v)}</div>
      <StyledBtn onClick={() => navigate("/")}>평점 남기기</StyledBtn>
    </Div>
  );
};

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => (props.bc ? props.bc : "#ddd")};
  border-radius: 50px;
  border: none;
  margin: 10px 5px !important;
`;

const Div = styled.div`
  * {
    margin: 10px 0;
  }

  span {
    padding: 5px;
    border-radius: 5px;
    background-color: orange;
    color: white;
  }
`;

const StyledBtn = styled.button`
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff6e60;
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;

export default Detail;
