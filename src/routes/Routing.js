import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../components/Home";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Routing;
