import "./App.css";
import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const day = useParams().day;

  // 키 입력을 받아 리렌더링을 위한 state
  const [grade, setGrade] = React.useState(-1);

  // 키보드 입력
  window.onkeydown = e => e.key >= 1 && e.key <= 5 ?  setGrade(e.key - 1) : null;

  return (
    <Div className="flex-column">
      <h2>
        <span>{day}요일</span> 평점 남기기
      </h2>
      <div className="flex-row">
        {Array.from({ length: 5 }, (_, i) => {
          return grade >= i ? (
            <Circle bc="#fff010" key={`detailCircle${i}`} onClick={() => setGrade(i)} />
          ) : (
            <Circle key={`detailCircle${i}`} onClick={() => setGrade(i)} />
          );
        })}
      </div>
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
