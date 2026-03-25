import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";

const WhatIsSection = () => (
  <section className="py-24 bg-card relative overflow-hidden">
    {/* Decorative lines */}
    <div className="absolute top-0 left-0 right-0 h-px radar-line" />
    <div className="absolute bottom-0 left-0 right-0 h-px radar-line" />

    <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Crosshair className="w-10 h-10 text-gold mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
          O que é o <span className="text-gradient-gold">Raio-X</span>?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          O Raio-X da Aprovação para Pilotos é um diagnóstico rápido que simula{" "}
          <span className="text-foreground font-medium">situações reais</span> avaliadas em seleções.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Você responde cenários comportamentais e descobre{" "}
          <span className="text-gold font-medium">como seu perfil é percebido</span>.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhatIsSection;
