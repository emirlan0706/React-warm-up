import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Outlet />
      </Container>
    </div>
  );
};
export default MainLayout;
