import React from 'react'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import AnnouncementBar from '../components/sections/announcement-bar'
import ContactHero from '../components/ContactSection/ContactHero'
import ContactCards from '../components/ContactSection/ContactCards'
import ContactMap from '../components/ContactSection/ContactMap'
const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
        <AnnouncementBar/>
      <Header />
      
      <main>
    <ContactHero/>
    <div className="relative">
    <div className="lg:absolute lg:top-[-250px] lg:left-0 lg:w-full lg:z-10">
        <ContactCards/>
      </div>
      <ContactMap/>
     
    </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact