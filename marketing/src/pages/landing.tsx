import Cta from "@/components/shared/landing/cta";
import FeatureDashboard from "@/components/shared/landing/featres";
import Footer from "@/components/shared/landing/footer";
import GradientBlobs from "@/components/shared/landing/hero-background";
import HeroSection from "@/components/shared/landing/hero-section";
import Navbar from "@/components/shared/landing/navbar";
import Pricings from "@/components/shared/landing/pricings";
import Setps from "@/components/shared/landing/steps";
import Testimonials from "@/components/shared/landing/testimonials";

const Landing = () => {
    return (
        <div className="relative w-full">
            <GradientBlobs />
            <div className="relative z-10">
                <Navbar />
                <HeroSection />
                <FeatureDashboard />
                <Setps />
                <Testimonials />
                <Pricings />
                <Cta />
                <Footer />
            </div>
        </div>
    );
};

export default Landing;
