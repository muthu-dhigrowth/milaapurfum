import React from 'react';

const ProductInfo = () => {
  return (
    <div className="mt-10">
      <h2 className="font-display text-[2rem] leading-9 font-medium text-primary mb-2.5">
        Product Info
      </h2>
      
      <div className="space-y-2.5">
        <p className="font-body text-base text-gray-text">
          We believe in crafting more than just soap; we create experiences. Our soap bars are meticulously handcrafted using a blend of premium natural ingredients, each chosen for its specific skincare benefits.
        </p>
        
        <ul className="list-disc list-outside pl-10 space-y-2.5 font-body text-base text-gray-text">
          <li>
            <strong className="font-bold text-primary">Skin Benefits:</strong> Detail the specific benefits each soap offers.
          </li>
          <li>
            <strong className="font-bold text-primary">No Harsh Chemicals:</strong> Assure customers about the absence of harsh chemicals like parabens, sulfates, and artificial fragrances in your soaps.
          </li>
          <li>
            <strong className="font-bold text-primary">Usage Instructions:</strong> Provide guidance on how best to use the soap for maximum benefits, whether it&apos;s for the face, body, or specific skin concerns.
          </li>
          <li>
            <strong className="font-bold text-primary">Customer Testimonials:</strong> Include snippets or links to reviews/testimonials from satisfied customers of your soaps.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;