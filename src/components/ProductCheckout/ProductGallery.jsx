

const mainImage = { 
  src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dea07f72-ece3-4780-984d-3cd835e3e7e1-soapnic-wbs-webflow-io/assets/icons/65683fefcd5e46d3067ce0ad_product-04-1.jpg?', 
  alt: 'Main product image of Soapure coffee soap bar',
};

const thumbnailImages = [
  { 
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dea07f72-ece3-4780-984d-3cd835e3e7e1-soapnic-wbs-webflow-io/assets/images/656b1da9b59a73ed77e6f583_product-detail-image1-2.jpg?', 
    alt: 'Detail shot of handmade soap bars with eucalyptus leaves',
  },
  { 
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dea07f72-ece3-4780-984d-3cd835e3e7e1-soapnic-wbs-webflow-io/assets/images/656b1daa4e1a70d2e6b3230f_product-detail-image2-3.jpg?', 
    alt: 'Detail shot of orange soap bars tied with twine',
  },
  { 
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dea07f72-ece3-4780-984d-3cd835e3e7e1-soapnic-wbs-webflow-io/assets/images/656b1daaf6e786000e5df103_product-detail-image3-4.jpg?', 
    alt: 'Detail shot of a soap bar with blue salt crystals and candles',
  }
];

const ProductGallery = () => {
  return (
    <div className="flex flex-col gap-5">
      <a href="#" className="block">
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          width={568}
          height={568}
          className="w-full h-auto object-cover rounded-[16px]"
          priority
        />
      </a>
      
      <div>
        <div className="flex flex-col gap-5">
          {thumbnailImages.map((image, index) => (
            <div key={index}>
              <a href="#" className="block">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={568}
                  height={379}
                  className="w-full h-auto object-cover rounded-[16px]"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;