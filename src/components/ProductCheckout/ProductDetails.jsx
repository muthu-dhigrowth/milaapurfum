import ProductDescription from "./ProductDescription";
import ProductInfo from "./ProductInfo";
const ProductDetails = () => {
    // As per the design instruction "with out of stock message",
    // this component renders the static out-of-stock state.
    return (
        <div className="product-sticky">
            <h1 className="font-display text-[38px] font-medium text-primary mb-5 leading-[1.2]">
                Soapure coffee soap
            </h1>
            <div className="flex items-center mb-[25px]">
                <div className="text-price-text text-xl font-bold">$ 60.00&nbsp;USD</div>
                <div className="text-gray-text line-through ml-[15px]">$ 69.00&nbsp;USD</div>
            </div>
            <p className="text-gray-text mb-[25px] leading-[1.7]">
                Energize your skin with invigorating coffee grounds, offering a refreshing and aromatic cleanse.
            </p>

            {/* The form elements are replaced by the out of stock message,
            following the logic from the provided HTML structure. */}
            <div>
                <div className="mt-2.5 text-center rounded-[5px] bg-muted py-[15px] px-[30px]">
                    <div className="text-[#222222] text-sm font-bold">This product is out of stock.</div>
                </div>
            </div>
            <div className="mt-[25px]">
                <ProductDescription/>
                <ProductInfo/>
            </div>
        </div>
    );
};

export default ProductDetails;