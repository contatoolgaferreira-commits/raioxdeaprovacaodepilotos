import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const AlertSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gold-dark/20 via-card to-card border border-gold/20 rounded-lg p-10 md:p-14 text-center glow-gold"
      >
        <AlertCircle className="w-10 h-10 text-gold mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
          Tentar mostrar um perfil perfeito é{" "}
          <span className="text-gradient-gold">exatamente o que reprova</span> pilotos.
        </h2>
        <div className="space-y-4 text-muted-foreground text-lg">
          <p>As empresas buscam <span className="text-foreground font-medium">consistência</span>, não perfeição.</p>
          <p>Sem autoconhecimento, o comportamento fica artificial.</p>
          <p className="text-gold font-display font-semibold text-xl">E isso elimina.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AlertSection;
