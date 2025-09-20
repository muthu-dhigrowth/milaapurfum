import React from 'react'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import AnnouncementBar from '../components/sections/announcement-bar'
// import CategoryFilter from '../components/Shop/CategoryFilter'
// import PageHero from '../components/Shop/PageHero'
import ProductGrid from '../components/Shop/ProductGrid'
// import Pagination from '../components/Shop/Pagination'
import Features from '../components/Shop/Features'
import InstagramGallery from '../components/Shop/InstagramGallery'
const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
        <AnnouncementBar/>
      <Header />
      
      <main>
        {/* <PageHero/> */}
        {/* <CategoryFilter/> */}
        <ProductGrid/>
        {/* <Pagination/> */}
        <Features/>
        <InstagramGallery/>
        
      
        
      </main>
      
      <Footer />
    </div>
  )
}

export default Shop