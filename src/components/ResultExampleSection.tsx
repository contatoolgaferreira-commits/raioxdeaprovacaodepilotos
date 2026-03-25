import { motion } from "framer-motion";

const ResultExampleSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          Exemplo de resultado
        </h2>

        <div className="bg-background border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-gold px-6 py-4">
            <p className="text-primary-foreground font-display font-bold text-sm tracking-widest uppercase">
              Seu Resultado — Raio-X
            </p>
          </div>

          <div className="p-8 space-y-6">
            {/* Score bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">Nível</span>
                  <span className="text-gold font-medium">Parcialmente alinhado</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-gold rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "62%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">Risco</span>
                  <span className="text-gold font-medium">Moderado</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-gold rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-muted-foreground mb-1">Ponto forte</p>
                <p className="font-medium text-foreground">Cultura de segurança</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-muted-foreground mb-1">Ponto crítico</p>
                <p className="font-medium text-gold">Comunicação sob hierarquia</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm text-center pt-2">
              Seu perfil indica <span className="text-gold font-medium">risco na entrevista comportamental</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResultExampleSection;
