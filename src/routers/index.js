import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Log from "../pages/log";
import Layout from "../layouts";
import Profile from "../pages/profile";
import Home from "../pages/home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/home" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/home/profile/khanh" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
