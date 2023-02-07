import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Log from "../pages/log";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="" element={<Log />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
