import React from "react";
import { Link } from "react-router-dom";

// Category data
const categoriesData = [
  { name: "All Products", to: "/shop", active: false },
  { name: "Acne-fighting soap", to: "/category/acne-fighting-soap", active: false },
  { name: "Sensitive skin soap", to: "/category/sensitive-skin-soap", active: false },
  { name: "Anti-aging soap", to: "/category/anti-aging-soap", active: true },
];

const CategoryFilter = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-x-2.5 gap-y-4 my-12">
      {categoriesData.map((category) => (
        <Link
          key={category.name}
          to={category.to}
          className={`inline-block rounded-full px-6 py-2.5 text-center text-sm font-medium transition-colors duration-200 ${
            category.active
              ? "bg-secondary text-secondary-foreground"
              : "bg-primary text-primary-foreground hover:bg-secondary"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;
