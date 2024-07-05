import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
//import videoSrc from "../videos/fish.mp4"; // 비디오 파일 import
import Login from "./Login";
import Aquatic from "./Aquatic";
import Tank from "./Tank";
import Home from "./Home";

// 다른 페이지 컴포넌트도 추가

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/aquatic" element={<Aquatic />} />
        <Route path="/tank" element={<Tank />} />
        {/* 다른 페이지 라우트도 추가 */}
      </Routes>
    </Router>
  );
};

export default App;
