import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ShieldCheck className="w-14 h-14 text-gold mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
          Garantia de 7 dias
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
          Se o diagnóstico não te gerar clareza sobre seu nível atual, você pode solicitar reembolso total dentro de 7 dias.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GuaranteeSection;
