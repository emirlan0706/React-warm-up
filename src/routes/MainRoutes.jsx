import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import EditProductPage from "../pages/EditProductPage";
import AuthPage from "../pages/AuthPage";
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
      </Routes>
    </div>
  );
};

export default MainRoutes;
