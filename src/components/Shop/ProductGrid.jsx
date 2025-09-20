import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {Millaparfumimag1,Millaparfumimag2,Millaparfumimag3,Millaparfumimag4,Millaparfumimag5,Millaparfumimag6,Millaparfumhoverimg1,Millaparfumhoverimg2,Millaparfumhoverimg3} from "../../assets/images";

// Product data
const products = [
  {
    name: "Neem oil natural soap",
    category: "Sensitive skin soap",
    price: "125.00",
    image:
      Millaparfumimag1,
    hoverImage:
      Millaparfumhoverimg1,
    to: "/product-checkout",
  },
  {
    name: "Seed & oil natural soap",
    category: "Anti-aging soap",
    price: "67.00",
    image:
      Millaparfumimag2,
    hoverImage:
      Millaparfumhoverimg2,
    to: "/product-checkout",
  },
  {
    name: "Soapure coffee soap",
    category: "Acne-fighting soap",
    price: "60.00",
    image:
      Millaparfumimag3,
    hoverImage:
      Millaparfumhoverimg3,
    to: "/product-checkout",
  },
  {
    name: "Multani mitti soap",
    category: "Anti-aging soap",
    price: "95.00",
    image:
      Millaparfumimag4,
    hoverImage:
      Millaparfumhoverimg1,
    to: "/product-checkout",
  },
  {
    name: "Artisanal cold soap",
    category: "Acne-fighting soap",
    price: "65.00",
    image:
      Millaparfumimag5,
    hoverImage:
      Millaparfumhoverimg2,
    to: "/product-checkout",
  },
  {
    name: "Herbal infused soap",
    category: "Anti-aging soap",
    price: "86.00",
    image:
      Millaparfumimag6,
    hoverImage:
      Millaparfumhoverimg3,
    to: "/product-checkout",
  },
  {
    name: "Vegan oil-free soap",
    category: "Acne-fighting soap",
    price: "59.00",
    image:
      Millaparfumimag1,
    hoverImage:
      Millaparfumhoverimg1,
    to: "/product-checkout",
  },
  {
    name: "Honey ginger soap",
    category: "Anti-aging soap",
    price: "120.00",
    image:
      Millaparfumimag2,
    hoverImage:
      Millaparfumhoverimg2,
    to: "/product-checkout",
  },
];

// Category filter
const categories = [
  { name: "All Products", to: "/shop", active: false },
  { name: "Acne-fighting soap", to: "/category/acne-fighting-soap", active: false },
  { name: "Sensitive skin soap", to: "/category/sensitive-skin-soap", active: false },
  { name: "Anti-aging soap", to: "/category/anti-aging-soap", active: true },
];

// Product card
const ProductCard = ({ product }) => (
  <div className="">
    <Link
      to={product.to}
      className="group block bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring max-w-sm mx-auto"
    >
      <div className="relative overflow-hidden aspect-square rounded-lg">
        <div className="category-tag absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-white rounded-2xl">
          {product.category}
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-primary text-white rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap shadow-sm">
            Shop now
          </div>
        </div>
      </div>
    </Link>
    <div className="p-4 text-center">
      <h3 className="product-name mb-1 text-primary text-2xl">
        {product.name}
      </h3>
      <p className="price-text text-2xl text-primary">$ {product.price} USD</p>
    </div>
  </div>
);

// Pagination component
const Pagination = () => {
  return (
    <div className="flex justify-center items-center py-16 font-Lato">
      <div className="mr-6 text-base font-normal text-primary-navy">1 / 2</div>
      <Link
        to="/shop?page=2"
        className="flex items-center justify-center bg-transparent rounded-full border border-primary px-6 py-2  text-primary"
      >
        <span>Next</span>
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

// Product grid
const ProductGrid = () => {
  return (
    <section className="py-16 md:py-[60px] bg-[#f5f5f5]">
      <div className="container">
        <h1 className="text-6xl leading-tight font-normal text-primary text-center mb-10 font-Bitter">
          Shop
        </h1>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 font-Bitter">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.to}
              className={`py-3 px-5 rounded-xl text-lg font-medium transition-colors duration-200 ${
                cat.active
                  ? "bg-[#ff8a63] text-white"
                  : "bg-primary text-white hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 font-Lato">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination />
      </div>
    </section>
  );
};

export default ProductGrid;
