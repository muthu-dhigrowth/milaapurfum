import React from 'react';
// import Image from 'next/image';
import {Millaparfumimag3} from "../../assets/images";

const stats = [
    { number: '125M', label: 'Happy Clients' },
    { number: '60K+', label: 'Products' },
    { number: '10M', label: 'Customer reviews' },
];

const imageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9b31f32-87c6-40fd-997b-83e20431a7bf-soapnic-wbs-webflow-io/assets/images/656aff5c41c907703d08ab16_about-image2-10.jpg?";

const EcoFriendlySection = () => {
    return (
        <section 
            className="py-24"
            // The original site has a complex gradient spanning multiple sections.
            // A simplified gradient is applied here to match the visual feel for this specific section.
            style={{ background: 'linear-gradient(to bottom, #f3f5ef, #fef9e7)' }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-20 items-center">
                    <div className="w-full aspect-[4/5] lg:h-[600px] lg:aspect-auto rounded-lg overflow-hidden">
                        <img
                            src={Millaparfumimag3}
                            alt="Eco-friendly handcrafted soap wrapped in paper and twine on a wooden surface."
                            width={550}
                            height={688}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="font-display text-6xl font-normal text-primary tracking-[-0.025em] leading-tight font-Bitter">
                            Embracing Eco-Friendly Soap Crafting
                        </h2>
                        <p className="text-body text-primary mt-5 font-Lato">
                            Join us in our commitment to eco-conscious soap crafting! From sustainable sourcing to minimal packaging, we prioritize planet-friendly practices, creating soaps that cleanse your skin and nurture our environment.
                        </p>
                        <div className="grid grid-cols-3 gap-x-8 mt-12">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <h3 className="text-4xl font-display leading-none text-primary font-Bitter">
                                        {stat.number}
                                    </h3>
                                    <div className="text-muted-foreground mt-2 text-base font-body text-primary font-Lato">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcoFriendlySection;