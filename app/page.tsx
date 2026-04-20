import {
  FaqSection,
  FieldUseSection,
  FitSection,
  FooterSection,
  Header,
  HeroSection,
  InsightSection,
  IntentSection,
  LeadFormSection,
  ProblemSection,
  ProcessSection,
  ProductPreviewSection,
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
        <ProductPreviewSection />
        <FieldUseSection />
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
