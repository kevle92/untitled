import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Pricing from "@/components/pricing/Pricing";
import Test from "@/components/testimonial/Test";
import Social from "@/components/social/Social";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Test />
      <Social />
      <CTA />
      <Footer />
    </main>
    );
}
