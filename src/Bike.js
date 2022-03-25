import React from "react";
import imgB from "./img/bike.png";
import styled from "styled-components";
import { keyframes } from "styled-components";

const random = nums => {
  for (let i = 0; i < nums.length; i++)
    nums[i] = parseInt(Math.random() * nums[i]) + 1;
  return nums;
};

const Bike = () => {
  const street_ref = React.useRef(null);

  return (
    <Card>
      <Street ref={street_ref}>
        {Array.from({ length: 15 }, (_, i) => (
          <Road
            key={`roadkey${i}`}
            className={`road road_${i}`}
            randList={random([35, 50, 2, 40])}
          ></Road>
        ))}
      </Street>
      <ImgBike />
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 300px;
  height: 150px;
  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
  text-align: center;
`;

const driving = keyframes`
  0% {
    margin-top: 5px;   //위아래 움직이기
    transform: scaleY(0.95) skew(1deg);  //크기조절 & 기울기
  }
  100% {
     margin-top: 0px;  //위아래 움직이기
  } 
`;

const ImgBike = styled.img.attrs({
  src: imgB,
  alt: "bike",
  className: "bike",
})`
  height: 150px;
  position: relative;
  animation: ${driving} 0.7s infinite linear alternate;
`;

const Street = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 42px;
  background-color: #3b3b3b;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
`;

const move = keyframes`
  100% {
    right: 300px;
  }
`;

const Road = styled.div`
  position: absolute;
  height: 1px;
  border-radius: 1px;
  top: ${props => props.randList[0]}px;
  right: 0;
  width: ${props => props.randList[1]}px;
  border-bottom: ${props => props.randList[2]}px solid #dbdbdb;
  transition: 3s;
  animation: ${move} ${props => (props.randList[3] * 0.1 + 0.3)}s linear infinite;
`;

export default Bike;
