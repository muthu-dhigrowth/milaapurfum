import React from 'react'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import HeroSection from '../components/AboutSection/AboutHeroSection'
import EcoFriendlySection from '../components/AboutSection/EcoFriendlySection'
import StatsSection from '../components/AboutSection/StatsSection'
import BenefitsSection from '../components/sections/benefits-section'
import InstagramGallery from '../components/sections/instagram-gallery'
import AnnouncementBar from '../components/sections/announcement-bar'

const About = () => {
  return (
    <div className="min-h-screen bg-background">
        <AnnouncementBar/>
      <Header />
      
      <main>
        
        <HeroSection />
        <StatsSection />
        <EcoFriendlySection />
        <BenefitsSection/>
        <InstagramGallery/>
        
      </main>
      
      <Footer />
    </div>
  )
}

export default About