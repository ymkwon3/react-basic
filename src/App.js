import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import React from 'react';

import Main from "./Main";
import Detail from "./Detail";

function App() {
  let day_list = ["일", "월", "화", "수", "목", "금", "토"];
  let today = new Date().getDay();
  for(let i = 0; i < today; i++) {
    day_list.push(day_list.shift());
  }
  const [days, setDays] = React.useState(day_list);
  
  return (
    <Wrap className="flex-column">
      <Container className="flex-column">
        <Routes>
          <Route path="/" element={<Main list={days}/>} />
          <Route path="/detail/:day" element={<Detail />} />
        </Routes>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  border: 2px solid #eee;
  width: 400px;
  height: 600px;
`;

export default App;
