import React from "react";
import "./App.css";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import Login from "./pages/Login";
import { Register2 } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/register" element={<Register2/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
