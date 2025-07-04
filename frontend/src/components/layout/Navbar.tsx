// src/components/layout/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/">Vynlo</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/sales">Vendas</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;