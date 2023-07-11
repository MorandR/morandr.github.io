import React from "react";
import {ReactDOM} from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Person from "./Person";
import Tree from "./FamilyTree"
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}/> 
      <Route path='/person' element={<Person/>}/> 
      <Route path='/secret' element={<Tree/>}/> 
      <Route path='/about' element={<About/>}/> 
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
