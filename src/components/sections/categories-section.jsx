"use client";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {Millaparfumimag5} from "../../assets/images";


const MarqueeContent = () => {
  const marqueeItems = [
    {
      text: "# Your best skin",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/6569883a519b1fe123b6d1f3_icon-18-14.svg?",
    },
    {
      text: "# It's ok to be sensitive",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/6569883a43fe259d23b64eeb_icon-19-15.svg?",
    },
  ];
  const fullMarqueeItems = Array(4).fill(marqueeItems).flat();

  return (
    <div className="animate-marquee flex-shrink-0 flex items-center justify-around min-w-full bg-white py-2 font-Lato">
      {fullMarqueeItems.map((item, index) => (
        <div key={index} className="flex items-center mx-6">
          <span className="font-display text-md text-primary whitespace-nowrap">
            {item.text}
          </span>
          <img
            src={item.icon}
            alt="Decoration"
            width={36}
            height={36}
            className="ml-6 flex-shrink-0"
          />
        </div>
      ))}
    </div>
  );
};

export default function CategoriesSection() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes marquee {
        from { transform: translateX(0%); }
        to { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 60s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-[#ff8a63]">
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
        <div className="container mx-auto px-5 md:px-20">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  gap-x-24 gap-y-16 items-center">
            {/* Left Image */}
            <div className="relative order-1">
              <img
                src={Millaparfumimag5}
                alt="Packaged soap bars"
                width={570}
                height={420}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>

            {/* Right Content */}
            <div className="relative order-2">
              <div className="relative z-10">
                {/* Flower icon first */}
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9862c2de-8284-4747-b6b9-fe39b9a80b96-soapnic-wbs-webflow-io/assets/svgs/656980fc8d994c8015257b7a_icon-17-13.svg?"
                  alt="Decoration"
                  width={80}
                  height={80}
                  className="mb-6"
                />

                {/* Then heading and content */}
                <h2 className="font-display text-4xl sm:text-5xl text-primary mb-5 font-Bitter">
                  Our categories
                </h2>
                <p className="text-text-dark text-lg mb-6 max-w-2xl text-primary font-Lato">
                  Our dermatologist-created collections of healing, essential,
                  and advanced work together to restore and reveal your best
                  skin.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 font-Lato">
                  <Link
                    to="/shop"
                    className="bg-brand-navy text-white bg-primary font-medium text-sm sm:text-base py-2 px-6 rounded-full transition-shadow duration-300 hover:shadow-lg"
                  >
                    Acne-fighting soap
                  </Link>
                  <Link
                    to="/shop"
                    className="bg-brand-navy text-white bg-primary font-medium text-sm sm:text-base py-2 px-6 rounded-full transition-shadow duration-300 hover:shadow-lg"
                  >
                    Sensitive skin soap
                  </Link>
                  <Link
                    to="/shop"
                    className="bg-brand-navy text-white bg-primary font-medium text-sm sm:text-base py-2 px-6 rounded-full transition-shadow duration-300 hover:shadow-lg"
                  >
                    Anti-aging soap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative flex overflow-x-hidden pb-12">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
