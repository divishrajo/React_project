import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes,Route } from "react-router-dom";  
import "./App.css";                    

const App = () => {
	return (
		<div>
        <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Register" element={<Register />} />
         <Route path="/Login" element={<Login />} />
       </Routes>
    </div>
   
	);
}

export default App;
