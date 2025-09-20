import React from 'react';
import { Millaparfumimag4 } from '../../assets/images';

const stats = [
  { value: "50K", label: "Happy Clients" },
  { value: "60K+", label: "Products" },
  { value: "99K+", label: "Customer reviews" }
];

export default function AboutStats() {
  return (
    <div className="bg-gradient-to-b from-[#c8d5e8] to-background p-10">
      <section className="pt-32 pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="flex flex-col">
              <h2 className="font-display text-primary text-6xl leading-[1.2] font-Bitter">
                Always fresh, always
                <br />
                pure
              </h2>
              <p className="mt-6 mb-12 text-lg text-text-medium text-primary leading-relaxed font-Lato">
                Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
              </p>
              <a 
                href="/about" 
                className="btn border border-primary text-primary hover:text-white rounded-full py-2 px-8 self-start font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-Lato"
              >
                Learn more
              </a>
              
              <div className="flex flex-row flex-wrap gap-x-12 sm:gap-x-16 gap-y-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="font-display text-4xl font-medium text-primary font-Lato">
                      {stat.value}
                    </h3>
                    <div className="mt-2 text-text-medium text-primary font-Lato">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="w-full h-[400px] md:h-[500px] lg:h-[550px] bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: `url(${Millaparfumimag4})`
              }}
              aria-label="Lifestyle image of soap bars with lavender."
            >
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}