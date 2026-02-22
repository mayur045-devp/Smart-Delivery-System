import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import Checkout from "../pages/customer/Checkout";
import TrackOrder from "../pages/customer/TrackOrder";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageOrders from "../pages/admin/ManageOrders";
import ManageProducts from "../pages/admin/ManageProducts";

import AgentDashboard from "../pages/agent/AgentDashboard";
import MyDeliveries from "../pages/agent/MyDeliveries";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Customer */}
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/track" element={<TrackOrder />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<ManageOrders />} />
        <Route path="/admin/products" element={<ManageProducts />} />

        {/* Delivery Agent */}
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/agent/deliveries" element={<MyDeliveries />} />
      </Routes>
    </BrowserRouter>
  );
}