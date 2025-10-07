import React from 'react'
import PageHeader from '@/compontes/PageHeader'
import Container from '@/compontes/Container'
import Breakfast from '@/compontes/Breakfast'
import TrendingRecipes from '@/compontes/TrendingRecipes'
export const metadata = {
  title: "SkyHub Menu | Delicious Dishes & Signature Flavors",
  description: " Browse SkyHub’s menu filled with mouthwatering dishes, crafted from the freshest ingredients and inspired by global cuisines. Taste excellence in every bite.",
};

export default function page() {
  return (
    <>
          {/* Page Header */}
          <PageHeader title="Menu" />
    
          {/* Page Content */}
          <Container >
            <section className="text-center my-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172B] mb-3">
            Food Menu
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg">
           Most Popular Items
          </p>
       </section>
       <Breakfast/>
       <TrendingRecipes/>
          </Container>
        </>
  )
}
