import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ConditionsSection } from "@/components/home/ConditionsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TrustSection } from "@/components/home/TrustSection";
import { PricingSection } from "@/components/home/PricingSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ConditionsSection />
      <HowItWorksSection />
      <TrustSection />
      <PricingSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
