import React from "react";

const PageHero = ({title}) => {
  return (
    <section className="pt-20 pb-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1
          className="text-center text-primary font-normal text-[48px] leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
         Shop
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
