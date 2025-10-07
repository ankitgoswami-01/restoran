import AboutSection from '@/compontes/AboutSection'
import Container from '@/compontes/Container'
import MasterChefs from '@/compontes/MasterChefs'
import PageHeader from '@/compontes/PageHeader'
export const metadata = {
  title: "About SkyHub | Our Story, Passion & Culinary Journey",
  description: " Learn more about SkyHub — our journey, vision, and the expert chefs who bring passion and creativity to every dish. Experience the heart behind the flavor.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="About Us" />

      {/* Page Content */}
      <Container>
        <AboutSection/>
        <MasterChefs/>
        
      </Container>
    </>
  )
}
