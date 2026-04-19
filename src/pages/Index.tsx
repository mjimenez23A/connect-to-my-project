import { Flame, MapPin, Phone, Clock, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";
import menuImg from "@/assets/menu.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import cocteles from "@/assets/cocteles.jpg";
import { ClosedBanner } from "@/components/ClosedBanner";

const WHATSAPP = "https://wa.me/573225223702";

const nuevosPlatos = [
  { name: "La Victoria", desc: "Hamburguesa al carbón · Pan artesanal 100gr · Carne 182gr · Queso Cheddar · Tocineta", price: "$28.000" },
  { name: "La Parrillera", desc: "Pan artesanal 100gr · Carne 182gr · Cebolla caramelizada · Tocineta · Salami · Mozzarella · Salsa de la casa", price: "$30.000" },
];

const masPedidos = [
  { name: "El Carmen", desc: "Pollo · Cerdo · Tocineta · Mozzarella · Maíz · Queso Cheddar", price: "$22.000" },
  { name: "El Tranca", desc: "Pan pretzel 1 metro · Costillitas · Suiza · Chorizo · Pollo · Salchicha (7 personas)", price: "$130.000" },
  { name: "La Bestia", desc: "Pan pretzel 70cm · Costillitas · Suiza · Chorizo · Pollo · Salchicha (5 personas)", price: "$90.000" },
  { name: "Salchipapa 4 Carnes", desc: "Pechuga · Chorizo Especial · Suiza · Salchicha · Papas a la francesa · Lechuga · Queso costeño", price: "$38.000" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ClosedBanner />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3">
          <img src={logo} alt="Parrilla del Sabor" className="h-12 md:h-14 rounded-md bg-white p-1" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#nuevos" className="hover:text-primary transition">Nuevos</a>
            <a href="#pedidos" className="hover:text-primary transition">Más pedidos</a>
            <a href="#nosotros" className="hover:text-primary transition">Nosotros</a>
            <a href="#menu" className="hover:text-primary transition">Menú</a>
            <a href="#promos" className="hover:text-primary transition">Promos</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2 transition shadow-fire"
          >
            <MessageCircle className="w-4 h-4" /> Pedir
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative container mx-auto text-center px-6 py-20">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Flame className="w-4 h-4" /> Todo al carbón · Barranquilla
          </div>
          <h1 className="font-display text-6xl md:text-9xl leading-none mb-6">
            EL PERRO MÁS <span className="text-gradient-fire">GRANDE</span>
            <br />
            DE BARRANQUILLA
          </h1>
          <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-2">
            …y no es tu marido. 🔥
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Sabor ahumado, porciones épicas. Hechos con fuego, carbón y mucho corazón costeño.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full flex items-center gap-2 transition shadow-fire text-lg"
            >
              <MessageCircle className="w-5 h-5" /> Pedir por WhatsApp
            </a>
            <a
              href="#menu"
              className="border border-foreground/30 hover:border-primary hover:text-primary text-foreground font-bold px-8 py-4 rounded-full transition text-lg"
            >
              Ver carta
            </a>
          </div>
        </div>
      </section>

      {/* NUEVOS PLATOS - texto dinámico, sin fotos */}
      <section id="nuevos" className="py-24 bg-ember">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Recién salidos del carbón</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">Nuestros Nuevos Platos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {nuevosPlatos.map((p, i) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute -top-10 -right-10 text-[10rem] font-display text-primary/10 group-hover:text-primary/20 transition leading-none select-none">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase px-2 py-1 rounded">Nuevo</span>
                    <Flame className="w-4 h-4 text-primary animate-pulse" />
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl mb-3 group-hover:text-primary transition">{p.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-display text-3xl text-primary">{p.price}</span>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold uppercase tracking-wider hover:text-primary transition flex items-center gap-1"
                    >
                      Pedir <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MÁS PEDIDOS - cuadrículas sin foto */}
      <section id="pedidos" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Los favoritos de la casa</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">Los Más Pedidos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {masPedidos.map((p) => (
              <article
                key={p.name}
                className="group bg-secondary/40 border border-border rounded-xl p-6 hover:bg-secondary hover:border-primary transition-all duration-300 flex flex-col"
              >
                <Flame className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="font-display text-2xl text-primary">{p.price}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="py-24 bg-ember">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Todo al carbón</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 mb-8">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6">
            En <strong className="text-primary">Parrilla del Sabor</strong> creemos que el verdadero sabor nace del fuego.
            Cada plato pasa por nuestro carbón ardiente, regalándole ese aroma ahumado, esa corteza dorada y ese sabor inconfundible que solo la brasa puede dar.
          </p>
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-6">
            Somos orgullosamente barranquilleros, hechos para los que disfrutan en grande.
            Tenemos <strong className="text-primary">el perro más grande de Barranquilla… y no es tu marido.</strong> Hasta 1 metro de pan pretzel, costillitas, pollo, chorizo y mucho más, todo al carbón.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Hamburguesas, salchipapas, chuzos, asados, perros supremos: todo cocinado lentamente sobre brasa para que cada bocado sea una experiencia.
            Esto no es comida rápida cualquiera — es <strong className="text-foreground">tradición costeña al carbón</strong>.
          </p>
        </div>
      </section>

      {/* MENÚ EN IMAGEN */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">La carta completa</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 mb-8">Nuestro Menú</h2>
          <a
            href={menuImg}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full transition shadow-fire mb-10"
          >
            <ExternalLink className="w-5 h-5" /> Abrir menú en nueva pestaña
          </a>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden border border-border shadow-fire">
            <a href={menuImg} target="_blank" rel="noopener noreferrer">
              <img src={menuImg} alt="Menú Parrilla del Sabor" className="w-full" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      {/* PROMOCIONES */}
      <section id="promos" className="py-24 bg-ember">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Promociones</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">Para Compartir</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-fire">
            <img src={cocteles} alt="Cócteles 2x1" className="w-full h-full object-cover min-h-[280px]" loading="lazy" width={1024} height={768} />
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="bg-primary text-primary-foreground text-xs font-bold uppercase px-2 py-1 rounded self-start mb-4">Promo activa</span>
              <h3 className="font-display text-4xl md:text-5xl mb-3">2x1 en Cócteles</h3>
              <p className="text-muted-foreground text-lg mb-2">Miércoles y Jueves</p>
              <p className="text-foreground/80 leading-relaxed">
                Disfruta el doble de sabor con nuestros cócteles. Pide uno y llévate dos, solo durante miércoles y jueves al lado de tu plato favorito al carbón.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Visítanos</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">Contacto</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Ubicación</h3>
              <p className="text-sm text-muted-foreground">Cra 21 #47B-91<br />Barrio El Carmen, Barranquilla</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Horario</h3>
              <p className="text-sm text-muted-foreground">Todos los días<br />5:00 PM – 1:30 AM<br /><span className="text-primary font-semibold">Martes cerrado</span></p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground rounded-xl p-6 text-center hover:bg-primary/90 transition shadow-fire"
            >
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Domicilios</h3>
              <p className="text-sm">322 5223702<br />WhatsApp directo</p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Parrilla del Sabor" className="h-12 rounded-md bg-white p-1" />
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Parrilla del Sabor · Todo al carbón · Barranquilla
          </p>
          <a
            href="https://instagram.com/parrilladelsabor21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary transition"
          >
            <Instagram className="w-5 h-5" /> @parrilladelsabor21
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
