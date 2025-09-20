import React from 'react';

const ProductDescription = () => {
  return (
    <div className="space-y-12">
      {/* Product Description Section */}
      <div>
        <h2 className="font-display text-[2rem] font-medium text-primary leading-tight mb-4">
          Product Description
        </h2>
        <div className="space-y-4">
          <p className="font-body text-base text-gray-text leading-relaxed">
            Immerse yourself in the serene essence of a blooming garden with every wash. Our handcrafted bar is a fragrant bouquet, marrying the delicate floral notes of gardenia with hints of jasmine and a touch of citrus. Enriched with nourishing shea butter and infused with vitamin-rich oils, this luxurious soap not only cleanses but also indulges your skin, leaving it velvety smooth and beautifully scented.
          </p>
          <p className="font-body text-base text-gray-text leading-relaxed">
            Elevate your bathing ritual and embrace the floral elegance of 'Glowing Gardenia' for a daily spa-like experience.
          </p>
        </div>
      </div>
      
      {/* Product Info Section */}
      <div>
        <h2 className="font-display text-[2rem] font-medium text-primary leading-tight mb-4">
          Product Info
        </h2>
        <div className="space-y-4">
          <p className="font-body text-base text-gray-text leading-relaxed">
            We believe in crafting more than just soap; we create experiences. Our soap bars are meticulously handcrafted using a blend of premium natural ingredients, each chosen for its specific skincare benefits.
          </p>
          <ul className="list-disc list-inside space-y-3 pt-1 font-body text-base text-gray-text leading-relaxed">
            <li>
              <strong className="font-semibold text-price-text">Skin Benefits: </strong>
              Detail the specific benefits each soap offers.
            </li>
            <li>
              <strong className="font-semibold text-price-text">No Harsh Chemicals: </strong>
              Assure customers about the absence of harsh chemicals like parabens, sulfates, and artificial fragrances in your soaps.
            </li>
            <li>
              <strong className="font-semibold text-price-text">Usage Instructions: </strong>
              Provide guidance on how best to use the soap for maximum benefits, whether it's for the face, body, or specific skin concerns.
            </li>
            <li>
              <strong className="font-semibold text-price-text">Customer Testimonials: </strong>
              Include snippets or links to reviews/testimonials from satisfied customers of your soaps.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;