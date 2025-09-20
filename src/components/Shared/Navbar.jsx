import React from "react";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Left - Links */}
      <div className="flex space-x-6 font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Shop</a>
      </div>

      {/* Center - Logo */}
      <div className="text-2xl font-bold text-gray-800">MyLogo</div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 cursor-pointer hover:text-blue-600" />
        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600" />
      </div>
    </nav>
  );
};


export default Navbar;  
