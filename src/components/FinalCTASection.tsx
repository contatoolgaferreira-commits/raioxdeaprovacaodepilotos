import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="py-24 bg-card relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px radar-line" />

    {/* Decorative radar */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold/5 opacity-30">
      <div className="absolute inset-8 rounded-full border border-gold/5" />
      <div className="absolute inset-20 rounded-full border border-gold/5" />
    </div>

    <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Descubra seu nível real de{" "}
          <span className="text-gradient-gold">aprovação</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          Você pode ir para a seleção achando que está pronto — ou{" "}
          <span className="text-foreground font-medium">descobrir antes</span>.
        </p>
        <Button variant="cta" size="lg" className="text-lg px-12 py-6 h-auto" onClick={() => window.open("https://chk.eduzz.com/39YN43Y3WO", "_blank")}>
          Quero fazer meu Raio-X agora
        </Button>
        <p className="text-muted-foreground text-sm mt-4">
          Acesso imediato · R$67 · Garantia 7 dias
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
