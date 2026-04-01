import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const ThankYou = () => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "Purchase", { value: 67.0, currency: "BRL" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Compra <span className="text-gradient-gold">confirmada!</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Obrigado pela sua compra! Verifique seu e-mail para acessar o Raio-X da Aprovação.
        </p>
        <Button
          variant="cta"
          size="lg"
          onClick={() => (window.location.href = "/")}
        >
          Voltar à página inicial
        </Button>
      </motion.div>
    </div>
  );
};

export default ThankYou;
