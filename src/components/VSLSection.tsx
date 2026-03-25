import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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

        {/* Video Player Placeholder */}
        <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden border border-border glow-gold mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
            <div className="h-full w-0 bg-gradient-gold" />
          </div>
        </div>

        <Button variant="cta" size="lg" className="text-lg px-10 py-6 h-auto">
          Quero fazer meu diagnóstico
        </Button>
      </motion.div>
    </div>
  </section>
);

export default VSLSection;
