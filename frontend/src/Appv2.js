
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StoreList from "./pages/StoreList";
import AdminDashboard from "./pages/AdminDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/owner" element={<OwnerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
