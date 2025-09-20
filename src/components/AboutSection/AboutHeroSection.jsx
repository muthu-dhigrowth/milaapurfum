import React from 'react';
import {Millaparfumimag5,Millaparfumimag4} from "../../assets/images";


const HeroSection = () => {
  return (
    <section className="py-10 bg-[#f0f4e9] px-4">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-[3.5rem] font-normal text-primary tracking-tight leading-tight font-Bitter">
            Luxurious organic soaps
          </h1>
          <p className="mt-6 text-md text-primary max-w-4xl mx-auto font-Lato">
            our passion for skincare extends to every bar of soap we create. We believe that bathing isn’t just a routine it's a moment of self-care and indulgence. Our soaps are meticulously handcrafted with a blend of nature’s finest ingredients.
          </p>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full aspect-[4/4] overflow-hidden rounded-lg">
            <img
              src={Millaparfumimag5}
              alt="Handcrafted soaps wrapped in paper and twine on a wooden surface with lavender sprigs"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
          <div className="relative w-full aspect-[4/4] overflow-hidden rounded-lg">
            <img
              src={Millaparfumimag4}
              alt="Person using a bar of soap over a white bathroom sink"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;