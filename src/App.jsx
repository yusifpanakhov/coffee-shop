import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./admin_pages/Admin";
import User from "./pages/User";
import Orders from "./admin_pages/Orders";


function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
<Route path="/admin/orders" element={<Orders />} />  
      <Route path="/" element={<Login />} />

      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
