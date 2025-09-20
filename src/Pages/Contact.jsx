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
      <ContactMap/>
      <div className="absolute top-[-250px] left-0 w-full z-10">
        <ContactCards/>
      </div>
    </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Contact