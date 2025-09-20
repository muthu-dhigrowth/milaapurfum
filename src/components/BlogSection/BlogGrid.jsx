// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { Link } from "react-router-dom";
import {Millaparfumimag1,Millaparfumimag2,Millaparfumimag3,Millaparfumimag4,Millaparfumimag5,Millaparfumimag6,Millaparfumhoverimg1,Millaparfumhoverimg2,Millaparfumhoverimg3} from "../../assets/images";

const blogPosts = [
  {
    category: "Strategy",
    date: "December 1, 2023",
    title: "Defend your skin in the natural way",
    excerpt: "Explore the protective prowess of botanical wonders in our journey to fortify and defend your skin the natural way.",
    imageUrl: Millaparfumimag1,
    href: "#",
  },
  {
    category: "Handmade",
    date: "December 1, 2023",
    title: "Organic soaps for the hygienic you",
    excerpt: "Pure hygiene meets nature's goodness. Try our organic soaps for a clean, eco-conscious routine.",
    imageUrl: Millaparfumimag2,
    href: "#",
  },
  {
    category: "Creative",
    date: "December 1, 2023",
    title: "Love the smell love your skin",
    excerpt: "Adore the fragrance, cherish your skin. Discover our aromatic soaps for a delightful, skin-loving experience.",
    imageUrl: Millaparfumimag3,
    href: "#",
  },
  {
    category: "Strategy",
    date: "December 1, 2023",
    title: "Exploring the Science of Soap Making",
    excerpt: "Explore the fascinating process that combines chemistry and creativity to craft the perfect cleansing bar.",
    imageUrl: Millaparfumimag4,
    href: "#",
  },
  {
    category: "Handmade",
    date: "December 1, 2023",
    title: "Nourishing Your Skin Naturally",
    excerpt: "Explore how nature's bounty replenishes and revitalizes your skin, naturally.",
    imageUrl: Millaparfumimag5,
    href: "#",
  },
  {
    category: "Creative",
    date: "December 1, 2023",
    title: "Choosing the Perfect Soap for Your Skin",
    excerpt: "The ideal soap that matches your skin's unique needs and preferences.",
    imageUrl:   Millaparfumimag6,
    href: "#",
  },
];

const BlogGrid = () => {
  return (
    <section className="bg-gradient-to-br from-[#e0e7ff] to-[#fed7aa] py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-6">
          {blogPosts.map((post) => (
            <Link key={post.title} href={post.href} className="group block">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  width={250}
                  height={150}
                  className="w-full h-auto object-cover aspect-[3/3] transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="bg-primary text-white text-sm font-medium py-2 px-3 rounded-full">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-sm font-Lato text-primary">
                    {post.date}
                </span>
              </div>
              <h2 className="text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary font-Bitter text-primary">
                {post.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed font-Lato text-primary">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;