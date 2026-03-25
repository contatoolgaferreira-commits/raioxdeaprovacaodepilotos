import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Score geral de aprovação",
  "Nível de risco",
  "Análise comportamental",
  "Competências fortes",
  "Pontos críticos",
  "Perfil percebido",
  "Probabilidade de aprovação",
  "Recomendação de preparação",
];

const WhatYouGetSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          O que você recebe
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 bg-secondary/50 border border-border rounded-lg px-5 py-4"
            >
              <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-gold" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhatYouGetSection;
