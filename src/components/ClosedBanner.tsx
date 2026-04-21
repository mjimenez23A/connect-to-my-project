import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "@/assets/logo1.png";

const STORAGE_KEY = "closed-banner-dismissed-date";

export const ClosedBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
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

      <div className="max-w-3xl w-full text-center space-y-8">
        <img
          src={logo}
          alt="Parrilla del Sabor"
          className="mx-auto w-72 md:w-[30rem] h-auto drop-shadow-[0_0_20px_hsl(0_85%_50%/0.6)]"
        />

        <div className="space-y-3">
          <p className="text-sm md:text-base uppercase tracking-[0.4em] text-foreground/60">
            Hoy estamos cerrados
          </p>

          <h2 className="font-display text-5xl md:text-7xl text-primary leading-none">
            Preparando
          </h2>

          <h3 className="font-display text-3xl md:text-5xl text-white leading-tight">
            cortes irresistibles
          </h3>

          <p className="text-xl md:text-3xl font-semibold text-primary/90">
            al carbón
          </p>

          <p className="text-base md:text-xl text-foreground/80 pt-3">
            Nos vemos mañana 🔥
          </p>
        </div>

        <button
          onClick={close}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-full transition shadow-fire text-lg"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};