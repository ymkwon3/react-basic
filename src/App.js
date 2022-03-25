import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import React from 'react';

import Main from "./Main";
import Detail from "./Detail";
import Bike from "./Bike";

function App() {
  return (
    <Wrap className="flex-column">
      {/* <Bike></Bike> */}
      <Container className="flex-column">
        <Routes>
          <Route path="/" element={<Main/>} />
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
