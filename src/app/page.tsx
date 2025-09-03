// import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Work from '@/components/Work';
import FeaturesSection from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQ';
import Partners from '@/components/Partners';
import CardSection from '@/components/CardSection';
import Scanning from '@/components/Scanning'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Partners />
      <Work />
      <FeaturesSection />
      <CardSection />
      <Scanning />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
