import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const VSLSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Assista antes de fazer o diagnóstico
        </h2>
        <p className="text-muted-foreground mb-10 text-lg">
          Entenda por que tentar mostrar um perfil perfeito está reprovando pilotos
        </p>

        <div className="relative aspect-video rounded-lg overflow-hidden border border-border glow-gold mb-8">
          <iframe
            src="https://www.youtube.com/embed/lfLUmo_NheQ?rel=0"
            title="Raio-X da Aprovação para Pilotos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <Button variant="cta" size="lg" className="text-lg px-10 py-6 h-auto">
          Quero fazer meu diagnóstico
        </Button>
      </motion.div>
    </div>
  </section>
);

export default VSLSection;
