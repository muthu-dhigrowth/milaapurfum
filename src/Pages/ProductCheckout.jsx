import React from "react";
import Header from "../components/sections/header";
import AnnouncementBar from "../components/sections/announcement-bar";
import Footer from "../components/sections/footer";
import ProductGallery from "../components/ProductCheckout/ProductGallery";
import ProductDetails from "../components/ProductCheckout/ProductDetails";
import Features from "../components/Shop/Features";
import ProductReview from "../components/ProductCheckout/ProductReview";
import RelatedProduct from "../components/ProductCheckout/RelatedProduct";
export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#cbd5e1] to-[#fed7aa]">
            <AnnouncementBar/>

            <Header />
            <main className="">
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <ProductGallery/>
                            <ProductDetails/>
                           

                        </div>
                    </div>
                </section>
                <Features/>

                {/* Product Information Sections */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <ProductReview/>
                           
                           

                        </div>
                    </div>
                </section>
                <RelatedProduct/>
        
            </main>

            <Footer/>
        </div>
    );
}
