import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Log from "../pages/log";
import Layout from "../layouts";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/home" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
