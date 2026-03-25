import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Comunicação",
  "Tomada de decisão",
  "Postura sob hierarquia",
  "Consistência",
  "Autoconhecimento",
];

const ProblemSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <AlertTriangle className="w-10 h-10 text-gold mx-auto mb-6" />
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
          A maioria dos pilotos acredita que a reprovação acontece por falta de horas de voo.
        </p>
        <p className="text-2xl md:text-3xl font-display font-bold mb-10">
          Mas o que realmente elimina é o{" "}
          <span className="text-gradient-gold">comportamento.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {problems.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-secondary border border-border rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
            >
              {p}
            </motion.div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <p className="text-lg text-foreground leading-relaxed">
            Você pode estar <span className="text-gold font-semibold">tecnicamente pronto</span>
            <br />e mesmo assim ser reprovado.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
