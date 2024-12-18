import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <div>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Header />
        <main
          className="container"
          style={{ padding: "1rem", overflow: "auto" }}
        >
          <Outlet /> {/* Render child routes */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
