
import Container from "@/compontes/Container";
import React from "react";
import PageHeader from "@/compontes/PageHeader";
import Service from "@/compontes/Service";
export const metadata = {
  title: "Our Services | Premium Dining & Catering by SkyHub",
  description: " Explore SkyHub’s exclusive services — fine dining, catering, and personalized culinary experiences crafted to perfection for every occasion.",
};

export default function Page() {
  return (
<>
      {/* Page Header */}
      <PageHeader title="Services" />

      {/* Page Content */}
      <Container>
        <section className="text-center my-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172B] mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg">
            Explore Our Services
          </p>
       </section>
       <Service/>
       <Service/>
      
      </Container>
    </>
   
  );
}

