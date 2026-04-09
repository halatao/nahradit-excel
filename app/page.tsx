import {
  FaqSection,
  FitSection,
  FooterSection,
  Header,
  HeroSection,
  InsightSection,
  IntentSection,
  LeadFormSection,
  ProblemSection,
  ProcessSection,
  SituationsSection,
  TrustSection,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <IntentSection />
        <InsightSection />
        <SituationsSection />
        <ProcessSection />
        <FitSection />
        <FaqSection />
        <LeadFormSection />
      </main>
      <FooterSection />
    </>
  );
}
