
import React ,{  useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Table.jsx";


const Container = styled.div`
  display: flex;
`;



function App() {


  return (
    
      <Container>
       
          <Table />
   
      </Container>
  
  );
}

export default App;