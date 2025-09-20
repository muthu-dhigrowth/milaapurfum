import React from 'react';

const statsData = [
  { value: "50K", label: "Sales in the first month" },
  { value: "100+", label: "Best-sellers" },
  { value: "1M", label: "Highly rated soaps" },
  { value: "500+", label: "Customer favorites" },
];

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#C8D5E8] to-[#F5F4F0]/30">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-y-10 text-center sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8">
            {statsData.map((stat, index) => (
              <div key={index}>
                <h2 className="font-display text-[40px] text-primary leading-none font-Bitter">
                  {stat.value}
                </h2>
                <div className="mt-2 text-base text-primary font-Lato">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;