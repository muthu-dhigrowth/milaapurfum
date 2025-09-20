// import Image from "next/image";
import { Link } from "react-router-dom";
import { Millaparfumimag1 } from '../../assets/images';
import { Millaparfumimag2 } from '../../assets/images';
import { Millaparfumimag3 } from '../../assets/images';
import { Millaparfumimag4 } from '../../assets/images';
import { Millaparfumimag5 } from '../../assets/images';
import { Millaparfumimag6 } from '../../assets/images';
import { Millaparfumhoverimg1 } from '../../assets/images';
import { Millaparfumhoverimg2 } from '../../assets/images';
import { Millaparfumhoverimg3 } from '../../assets/images';

const products = [
  {
    id: 1,
    category: "Sensitive skin soap",
    name: "Neem oil natural soap",
    price: "$ 125.00 USD",
    mainImage: Millaparfumimag1,
    hoverImage: Millaparfumhoverimg1,
    href: "/product-checkout",
  },
  {
    id: 2,
    category: "Acne-fighting soap",
    name: "Soapure coffee soap",
    price: "$ 60.00 USD",
    mainImage: Millaparfumimag2,
    hoverImage: Millaparfumhoverimg2,
    href: "/product-checkout",
  },
  {
    id: 3,
    category: "Anti-aging soap",
    name: "Multani mitti soap",
    price: "$ 95.00 USD",
    mainImage: Millaparfumimag3,
    hoverImage: Millaparfumhoverimg3,
    href: "/product-checkout",
  },
  {
    id: 4,
    category: "Sensitive skin soap",
    name: "Palm oil-free soap",
    price: "$ 150.00 USD",
    mainImage: Millaparfumimag4,
    hoverImage: Millaparfumhoverimg3,
    href: "/product-checkout",
  },
];

const ProductCard = ({ product }) => (
  <Link to={product.href} className="group block">
    {/* Reduce card and image: switch to 1/1 aspect and use fill images */}
    <div className="relative overflow-hidden rounded-xl bg-card aspect-[1/1] shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="absolute top-4 left-4 z-10 rounded-full text-white bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
        {product.category}
      </div>
      <img
        src={product.mainImage}
        alt={product.name}
        className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      <img
        src={product.hoverImage}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
      />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="rounded-full bg-accent px-5 bg-primary text-white py-2 text-sm font-medium text-accent-foreground whitespace-nowrap">
          Shop now
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <h3 className="font-display text-2xl font-medium text-primary">{product.name}</h3>
      <p className="mt-1 text-lg font-normal text-primary">{product.price}</p>
    </div>
  </Link>
);

const OurProductsSection = () => {
  return (
    <section className="py-24 bg-[#dcdec9] p-10">
      <div className="container">
        {/* Left align title */}
        <h2 className="text-left font-display text-6xl text-primary mb-16 font-normal font-Bitter">
          Our products
        </h2>
        {/* Make cards smaller: increase columns to 4 on md+ and reduce gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 font-Lato">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;