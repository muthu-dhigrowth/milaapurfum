import React from 'react'
import heroBanner from "../../assets/images/Bannerimg.webp";
import { Search, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  return (
  
          <section
            className="relative h-[95vh] w-full bg-cover bg-center bg-no-repeat flex items-center"
            style={{
              backgroundImage:
                `url(${heroBanner})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-40"></div>
      
            {/* Top navigation inside hero */}
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="flex items-center justify-between px-6 py-4">
                {/* Left - Links */}
                <div className="flex space-x-6 font-medium text-black">
                  <a href="#" className="hover:text-white">Home</a>
                  <a href="#" className="hover:text-white">About</a>
                  <a href="#" className="hover:text-white">Shop</a>
                </div>

                {/* Center - Logo */}
                <div className="text-2xl font-bold text-white">MyLogo</div>

                {/* Right - Icons */}
                <div className="flex items-center space-x-4 text-white">
                  <Search className="w-5 h-5 cursor-pointer hover:text-blue-300" />
                  <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-300" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-left text-white px-8 max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Discover Our New Collection
              </h1>
              <p className="mb-6 text-lg">
                Upgrade your style with the best picks for this season.
              </p>
              <button className="px-6 py-3 bg-transparent text-white border border-primary rounded-full shadow-md hover:bg-primary  transition flex text-center ">
                Shop Now
              </button>
            </div>
          </section>
        );
      };


export default HeroSection