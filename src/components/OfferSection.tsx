import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { handleCTAClick } from "@/lib/pixel";

const includes = [
  "Diagnóstico completo",
  "Score comportamental",
  "Relatório imediato",
  "Análise de risco",
];

const OfferSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-background border border-gold/20 rounded-lg overflow-hidden glow-gold"
      >
        <div className="bg-gradient-gold px-6 py-4 text-center">
          <p className="text-primary-foreground font-display font-bold tracking-widest uppercase text-sm">
            Acesso Completo
          </p>
        </div>

        <div className="p-10 text-center">
          <Zap className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
            Raio-X da Aprovação para Pilotos
          </h2>

          <div className="space-y-3 mb-10 max-w-xs mx-auto">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 text-left">
                <Check className="w-5 h-5 text-gold shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground text-sm mb-1">Acesso imediato por</p>
            <p className="text-5xl font-display font-bold text-gradient-gold">R$67</p>
          </div>

          <Button variant="cta" size="lg" className="text-lg px-12 py-6 h-auto w-full max-w-sm" onClick={() => window.open("https://chk.eduzz.com/39YN43Y3WO", "_blank")}>
            Fazer meu Raio-X agora
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
