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
];


// Product card
const RelatedProduct = ({ product }) => (
  <div>
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
// const Pagination = () => {
//   return (
//     <div className="flex justify-center items-center py-16 font-Lato">
//       <div className="mr-6 text-base font-normal text-primary-navy">1 / 2</div>
//       <Link
//         to="/shop?page=2"
//         className="flex items-center justify-center bg-transparent rounded-full border border-primary px-6 py-2  text-primary"
//       >
//         <span>Next</span>
//         <ChevronRight className="ml-1 h-4 w-4" />
//       </Link>
//     </div>
//   );
// };

// Product grid
const ProductGrid = () => {
  return (
    <section className="py-16 md:py-[60px] bg-[#ff8a63]">
      <div className="container">
        <h1 className="text-4xl leading-tight font-normal text-primary text-center mb-10 font-Bitter">
          Related Products
        </h1>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 font-Lato">
          {products.map((product) => (
            <RelatedProduct key={product.name} product={product} />
          ))}
        </div>

        {/* Pagination */}
        {/* <Pagination /> */}
      </div>
    </section>
  );
};

export default ProductGrid;
