import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Notice from "./component/Notice";


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/notice" element={<Notice/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
