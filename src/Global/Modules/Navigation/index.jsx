import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

import { NavigationContainer } from "./Navigation_style";

// Component

import Header from "../../Components/Header";

// Global Modules
const LoginPage = lazy(() => import("../Login/Page"));
const RegisterPage = lazy(() => import("../Register/Page"));

// Modules
const ProductList = lazy(() => import("../../../Modules/ProductList/Page"));
const MyCart = lazy(() => import("../../../Modules/Cart/Page"));
const ProductRegistration = lazy(() =>
  import("../../../Modules/ProductRegistration/Page")
);

const Navigation = () => {
  const routes = (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/my-cart" element={<MyCart />} />
      <Route path="/product-registration" element={<ProductRegistration />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );

  return (
    <Suspense fallback={<CircularProgress size={100} />}>
      <NavigationContainer>
        <Header />
        {routes}
      </NavigationContainer>
    </Suspense>
  );
};
export default Navigation;
