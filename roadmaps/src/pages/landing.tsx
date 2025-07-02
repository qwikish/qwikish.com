import Cta from "@/components/shared/landing/cta"
import FeatureDashboard from "@/components/shared/landing/features"
import Footer from "@/components/shared/landing/footer"
import GradientBlobs from "@/components/shared/landing/hero-background"
import HeroSection from "@/components/shared/landing/hero-section"
import Navbar from "@/components/shared/landing/navbar"
import PricingSection from "@/components/shared/landing/pricing"
import RoadmapSteps from "@/components/shared/landing/steps"
import RoadmapTestimonials from "@/components/shared/landing/testimonial"

const LandingPage = () => {
  return (
      <div className="h-screen bg-background w-full">
        <GradientBlobs />
        <Navbar />
        <HeroSection />
        <FeatureDashboard   />
        <RoadmapSteps />
        <RoadmapTestimonials />
        <PricingSection />
        <Cta />
        <Footer />
    </div>
  )
}

export default LandingPage