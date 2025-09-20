import React from 'react'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import AnnouncementBar from '../components/sections/announcement-bar'
import BlogHero from '../components/BlogSection/BlogHero'
import BlogGrid from '../components/BlogSection/BlogGrid'
const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
        <AnnouncementBar/>
      <Header />
      
      <main>
      <BlogHero/>
      <BlogGrid/>
        
      
        
      </main>
      
      <Footer />
    </div>
  )
}

export default Blog