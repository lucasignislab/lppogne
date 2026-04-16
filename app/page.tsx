import GlassmorphismTrustHero from '@/components/ui/glassmorphism-trust-hero';
import Problems from '@/components/Problems';
import Solution from '@/components/Solution';
import Benefits from '@/components/Benefits';
import CaseStudy from '@/components/CaseStudy';
import HowItWorks from '@/components/HowItWorks';
import Numbers from '@/components/Numbers';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <GlassmorphismTrustHero />
      <Problems />
      <Solution />
      <Benefits />
      <CaseStudy />
      <HowItWorks />
      <Numbers />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
