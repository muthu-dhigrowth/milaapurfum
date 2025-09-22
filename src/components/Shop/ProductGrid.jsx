import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import api from "../../api/axios"; // <-- Axios instance with base URL

// Product card
const ProductCard = ({ product }) => (
  <div>
    <Link
      to={`/product-checkout/${product._id}`} // navigate to product details page
      className="group block bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring max-w-sm mx-auto"
    >
      <div className="relative overflow-hidden aspect-square rounded-lg">
        <div className="category-tag absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-white rounded-2xl">
          {product.categoryInfo?.sub || "General"}
        </div>
        <img
          src={product.media?.[0]?.url}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {product.media?.[1]?.url && (
          <img
            src={product.media[1].url}
            alt={`${product.name} hover`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
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
      <p className="price-text text-2xl text-primary">
        ${product.finalPrice} USD
      </p>
    </div>
  </div>
);

// Pagination (optional — static for now)
const Pagination = () => {
  return (
    <div className="flex justify-center items-center py-16 font-Lato">
      <div className="mr-6 text-base font-normal text-primary-navy">1 / 2</div>
      <Link
        to=""
        className="flex items-center justify-center bg-transparent rounded-full border border-primary px-6 py-2 text-primary"
      >
        <span>Next</span>
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

// Product grid
const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/products"); // backend route
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      }
    })();
  }, []);

  return (
    <section className="py-16 md:py-[60px] bg-[#f5f5f5]">
      <div className="container">
        <h1 className="text-6xl leading-tight font-normal text-primary text-center mb-10 font-Bitter">
          Shop
        </h1>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 font-Lato">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-lg font-medium text-primary">No products available</div>
            </div>
          )}
        </div>

        <Pagination />
      </div>
    </section>
  );
};

export default ProductGrid;
