import React from 'react'
import PageHeader from '@/compontes/PageHeader'
import Container from '@/compontes/Container'
import MasterChefs from '@/compontes/MasterChefs'
import OurClients from '@/compontes/OurClients'
import ReservationSection from '@/compontes/ReservationSection'
export const metadata = {
  title: "Explore Pages | Discover More from SkyHub",
  description: " Dive deeper into SkyHub’s world — from blog posts to culinary insights and featured updates. Stay inspired by our latest creations and news.",
};


export default function page() {
  return (
    <>
          {/* Page Header */}
          <PageHeader title="Our Team" />
    
          {/* Page Content */}
          <Container >
        <MasterChefs/>
        <OurClients/>
        <ReservationSection/>
       </Container>
        </>
   
  )
}
