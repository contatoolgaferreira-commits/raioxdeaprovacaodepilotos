import HeroSection from "@/components/HeroSection";
import VSLSection from "@/components/VSLSection";
import ProblemSection from "@/components/ProblemSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import AlertSection from "@/components/AlertSection";
import ResultExampleSection from "@/components/ResultExampleSection";
import ForWhoSection from "@/components/ForWhoSection";
import OfferSection from "@/components/OfferSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => (
  <main className="overflow-hidden">
    <HeroSection />
    <VSLSection />
    <ProblemSection />
    <WhatIsSection />
    <HowItWorksSection />
    <WhatYouGetSection />
    <AlertSection />
    <ResultExampleSection />
    <ForWhoSection />
    <OfferSection />
    <GuaranteeSection />
    <FinalCTASection />

    {/* Footer */}
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
        <p>Raio-X da Aprovação para Pilotos · Produto digital · Entrega imediata</p>
        <p className="mt-1">Todos os direitos reservados</p>
      </div>
    </footer>
  </main>
);

export default Index;
