import React from "react";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./style.css"
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="outlet">
      <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
