import React, { Suspense, lazy } from "react";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

import { NavigationContainer } from "./Navigation_style";

// Component

import Header from '../../Components/Header'

// Global Modules
const LoginPage = lazy(() => import("../Login/Page"));
const RegisterPage = lazy(() => import("../Register/Page"));

const Navigation = () => {
  const routes = (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/product-list" element={< />} /> */}
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
