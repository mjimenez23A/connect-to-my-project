import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const STORAGE_KEY = "closed-banner-dismissed-date";

export const ClosedBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Tuesday in local time = 2
    const today = new Date();
    const isTuesday = today.getDay() === 2;
    if (!isTuesday) return;

    const todayKey = today.toDateString();
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed !== todayKey) setOpen(true);
  }, []);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, new Date().toDateString());
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-6 animate-in fade-in duration-300">
      <button
        onClick={close}
        aria-label="Cerrar"
        className="absolute top-6 right-6 rounded-full bg-secondary hover:bg-primary text-foreground p-3 transition"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="max-w-2xl w-full text-center space-y-8">
        <img src={logo} alt="Parrilla del Sabor" className="mx-auto w-48 md:w-64 rounded-xl bg-white p-4" />
        <h2 className="font-display text-4xl md:text-6xl text-primary leading-tight">
          ¡Lo sentimos!
        </h2>
        <p className="text-lg md:text-2xl text-foreground/90 leading-relaxed">
          Estamos preparando la mejor carne para ustedes.
          <br />
          Los esperamos nuevamente <span className="text-primary font-bold">mañana</span>.
        </p>
        <button
          onClick={close}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-full transition shadow-fire"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
