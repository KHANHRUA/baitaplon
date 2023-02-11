import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Log from "../pages/log";
import Layout from "../layouts";
// import Profile from "../pages/profile";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/home" element={<Layout />}>
          {/* <Route path="/home/profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
