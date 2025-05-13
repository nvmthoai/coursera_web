import React from "react";
import ScrollTop from "../components/ScrollTop";
import MainLayout from "../Layouts/MainLayout";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </>
  );
}
