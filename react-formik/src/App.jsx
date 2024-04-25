import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import ClassNames from "./pages/ClassNames";
import Yup from "./pages/Yup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/classnames" element={<ClassNames/>} />
                <Route path="/yup" element={<Yup/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
