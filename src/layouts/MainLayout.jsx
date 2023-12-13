import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../sections/navbar/Navbar";
import Footer from "../sections/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
