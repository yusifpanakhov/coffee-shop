import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./admin_pages/Admin";
import Orders from "./admin_pages/Orders";
import User from "./user_pages/User";
import UserLayout from "./user_pages/UserLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/orders" element={<Orders />} />

      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
