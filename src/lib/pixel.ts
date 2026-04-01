declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackPurchase = () => {
  if (window.fbq) {
    window.fbq("track", "Purchase", { value: 67.0, currency: "BRL" });
  }
};

export const handleCTAClick = () => {
  trackPurchase();
  window.open("https://chk.eduzz.com/39YN43Y3WO", "_blank");
};
