import React from 'react'
import PageHeader from '@/compontes/PageHeader'
import Container from '@/compontes/Container'
import ReservationSection from '@/compontes/ReservationSection'
export const metadata = {
  title: "Book a Table | Reserve Your Spot at SkyHub",
  description: " Secure your dining experience today. Book a table at SkyHub and enjoy our premium ambiance, exquisite menu, and unmatched hospitality.",
};

export default function page() {
  return (
     <>
              {/* Page Header */}
              <PageHeader title="  Book A Table"/>
        
              {/* Page Content */}
              <Container>
                 <section className="text-center my-12">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172B] mb-3">
             Book A Table
            </h2>
            <ReservationSection/>
         
       </section>
               
              </Container>
            </>
  )
}
