import { motion } from "framer-motion";
import { Target } from "lucide-react";

const audiences = [
  "Pilotos com horas mínimas",
  "Pilotos em preparação para seleção",
  "Pilotos reprovados anteriormente",
  "Pilotos buscando antecipação",
  "Pilotos querendo aumentar suas chances",
];

const ForWhoSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Target className="w-10 h-10 text-gold mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
          Para quem é
        </h2>
        <div className="space-y-3">
          {audiences.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-card border border-border rounded-lg px-6 py-4 text-left"
            >
              <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
              <span className="text-foreground">{a}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ForWhoSection;
