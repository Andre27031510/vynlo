// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/home/Home';
import ProductList from './pages/products/list/ProductList';
import CreateProduct from './pages/products/create/CreateProduct';
import EditProduct from './pages/products/edit/EditProduct';
import RegisterSale from './pages/sales/register/RegisterSale';
import SaleHistory from './pages/sales/history/SaleHistory';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/create" element={<CreateProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/sales/register" element={<RegisterSale />} />
          <Route path="/sales/history" element={<SaleHistory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <a href="#" className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
          Suporte WhatsApp
        </a>
      </div>
    </Router>
  );
}

export default App;