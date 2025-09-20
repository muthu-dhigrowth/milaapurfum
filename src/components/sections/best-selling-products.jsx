// import Image from 'next/image';
import { Link } from "react-router-dom";
import { Millaparfumimag1,Millaparfumimag2,Millaparfumimag3,Millaparfumhoverimg1,Millaparfumhoverimg2,Millaparfumhoverimg3} from "../../assets/images";

const products = [
  {
    category: "Acne-fighting soap",
    name: "Sandalwood natural soap",
    price: "169.00",
    originalPrice: "172.00",
    image:
      Millaparfumimag1,
    hoverImage:
      Millaparfumhoverimg1,
    link: "/product-checkout",
  },
  {
    category: "Anti-aging soap",
    name: "Seed & oil natural soap",
    price: "67.00",
    originalPrice: "79.00",
    image:
      Millaparfumimag2,
    hoverImage:
      Millaparfumhoverimg2,
    link: "/product-checkout",
  },
  {
    category: "Sensitive skin soap",
    name: "Milk handmade soap",
    price: "75.00",
    originalPrice: "80.00",
    image:
      Millaparfumimag3,
    hoverImage:
      Millaparfumhoverimg3,
    link: "/product-checkout",
  },
];

const ProductCard = ({ product }) => (
  <Link
    to={product.link}
    className="group block no-underline"
    style={{ textDecoration: "none" }}
  >
    <div className="relative overflow-hidden rounded-xl">
      <div className="relative w-full h-[320px] md:h-[380px] lg:h-[400px]">
        {/* Category badge inside image */}
        <div className="absolute top-4 left-4 z-10 rounded-full text-white bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {product.category}
        </div>

        {/* Normal Image */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={`${product.name} hover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Hover CTA inside image */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 transform transition-all duration-300 group-hover:opacity-100">
          <div className="bg-primary text-white text-sm font-medium rounded-full px-5 py-[9px] whitespace-nowrap shadow-md">
            Shop now
          </div>
        </div>
      </div>
    </div>

    {/* Product Info */}
    <div className="text-center">
      <h3 className="font-display text-2xl font-medium text-primary mt-[10px]">
        {product.name}
      </h3>
      <div className="flex justify-center items-baseline gap-2 mt-[5px]">
        <p className="text-primary font-semibold text-lg">
          $&nbsp;{product.price}&nbsp;USD
        </p>
        <p className="text-muted-foreground line-through text-base">
          $&nbsp;{product.originalPrice}&nbsp;USD
        </p>
      </div>
    </div>
  </Link>
);

const BestSellingProducts = () => {
  return (
    <section className="py-[120px] bg-[#f0f4e9]">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="font-display text-[48px] leading-[1.2] text-primary font-normal font-Bitter">
            Best selling products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-[50px] font-Lato">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
