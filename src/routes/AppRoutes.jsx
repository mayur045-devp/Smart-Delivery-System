import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/customer/Home";
import MyOrders from "../pages/customer/MyOrders";
import AdminDashboard from "../pages/admin/AdminDashboard";
import DeliveryDashboard from "../pages/agent/DeliveryDashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main App Layout */}
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/my-orders"
          element={
            <MainLayout>
              <MyOrders />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <MainLayout>
              <AdminDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/deliveries"
          element={
            <MainLayout>
              <DeliveryDashboard />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}