import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import Post from "./pages/Post/Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
