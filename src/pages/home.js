import React from 'react';
import Navbar from '../components/navbar';
import HeroHeader from '../components/HeroHeader';
import FeatureSection from '../components/FeatureSection';
import BenefitsSection from '../components/BenefitsSection';
import PricingSection from '../components/PricingSection';
import TestimonialSection from '../components/TestimonialSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer'
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
