import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "../contexts/AuthContextProvider";
import MainLayout from "../layouts/MainLayout";
import AddProductPage from "../pages/AddProductPage";
import AuthPage from "../pages/AuthPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/details/:id" element={<ProductDetailsPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
