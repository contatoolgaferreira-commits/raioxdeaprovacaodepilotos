import { motion } from "framer-motion";
import { Shield, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleCTAClick } from "@/lib/pixel";
import heroImg from "@/assets/hero-aviation.jpg";

const badges = [
  { icon: Zap, label: "Diagnóstico rápido" },
  { icon: BarChart3, label: "Resultado imediato" },
  { icon: Shield, label: "Baseado em avaliação por competências" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Radar decorative element */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10 opacity-20">
      <div className="absolute inset-4 rounded-full border border-gold/10" />
      <div className="absolute inset-12 rounded-full border border-gold/10" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gold/5" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gold/5" />
      <div className="w-1/2 h-px bg-gradient-to-r from-gold/40 to-transparent origin-left animate-radar-sweep absolute top-1/2 left-1/2" />
    </div>

    <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-6">
          Raio-X da Aprovação para Pilotos
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
          Descubra em 3 minutos se você seria{" "}
          <span className="text-gradient-gold">aprovado hoje</span> em uma seleção de companhia aérea
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
          Um diagnóstico comportamental que revela seu risco real de reprovação antes da entrevista
        </p>

        <div className="flex flex-col items-center gap-4 mb-10 mt-2">
          <Button variant="cta" size="lg" className="text-lg px-10 py-6 h-auto" onClick={() => window.open("https://chk.eduzz.com/39YN43Y3WO", "_blank")}>
            Fazer meu Raio-X agora
          </Button>
          <p className="text-muted-foreground text-sm">
            Acesso imediato por <span className="text-gold font-semibold">R$67</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
              <b.icon className="w-4 h-4 text-gold" />
              {b.label}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
