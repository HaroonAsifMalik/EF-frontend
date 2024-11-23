import React from 'react';
import Navbar from '../components/Common/NavBar';
import HeroHeader from '../components/home/HeroHeader';
import FeatureSection from '../components/home/FeatureSection';
import BenefitsSection from '../components/home/BenefitsSection';
import PricingSection from '../components/home/PricingSection';
import TestimonialSection from '../components/home/TestimonialSection';
import TeamSection from '../components/home/TeamSection';
import FAQSection from '../components/faq/FAQSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/Common/footers/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroHeader/>
      <FeatureSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialSection />
      <CTASection/> 
      <TeamSection />
      <FAQSection/>
     <Footer/>
    </div>
  );
};

export default Home;
