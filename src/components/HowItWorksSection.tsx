import { motion } from "framer-motion";
import { ClipboardList, BarChart3, ShieldAlert } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Responda 32 situações reais", desc: "Cenários comportamentais de seleções" },
  { icon: BarChart3, step: "02", title: "Receba seu score comportamental", desc: "Análise detalhada do seu perfil" },
  { icon: ShieldAlert, step: "03", title: "Descubra seu risco de reprovação", desc: "Seu nível real de preparação" },
];

const HowItWorksSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
      >
        Como funciona
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative bg-card border border-border rounded-lg p-8 text-center group hover:border-gold/30 transition-colors"
          >
            <span className="text-5xl font-display font-bold text-gold/10 absolute top-4 right-4">
              {s.step}
            </span>
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors">
              <s.icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
