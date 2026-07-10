import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import {
  Scale, Shield, Heart, TrendingUp, Users, Eye,
  BookOpen, Activity, Leaf, Zap, Globe, Building2, TreePine,
  ChevronRight, ArrowRight, Quote, Calendar, MapPin, Star,
  CheckCircle2, Award, BarChart2
} from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

const HERO_IMG = "https://images.unsplash.com/photo-1552710307-8d1c604d6319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2l0aXplbnMlMjBjb21tdW5pdHklMjBJdm9yeSUyMENvYXN0JTIwcGVvcGxlJTIwY3Jvd2R8ZW58MXx8fHwxNzgzNDI0Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const PRESIDENT_IMG = "https://images.unsplash.com/photo-1612813561206-b5db45fb4068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2ElMjBwcmVzaWRlbnQlMjBwb2xpdGljaWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzNDI0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const EDU_IMG = "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2ElMjBlZHVjYXRpb24lMjBzY2hvb2wlMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3ODM0MjQ3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const CITY_IMG = "https://images.unsplash.com/photo-1562774207-e20d9ad4b566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2ElMjBjaXR5JTIwbW9kZXJuJTIwaW5mcmFzdHJ1Y3R1cmUlMjBkZXZlbG9wbWVudCUyMHVyYmFufGVufDF8fHx8MTc4MzQyNDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  { icon: Scale, label: "Démocratie", desc: "Le peuple, source de toute légitimité." },
  { icon: Shield, label: "République", desc: "L'État de droit, pilier de notre nation." },
  { icon: Scale, label: "Justice", desc: "L'équité pour chaque citoyen gabonais." },
  { icon: TrendingUp, label: "Développement", desc: "La croissance au service de tous." },
  { icon: Users, label: "Solidarité", desc: "Ensemble, nous sommes plus forts." },
  { icon: Eye, label: "Transparence", desc: "L'honnêteté comme fondement de la confiance." },
];

const programmes = [
  { icon: BookOpen, label: "Éducation", desc: "Scolarisation universelle, qualité d'enseignement et bourses pour les meilleurs élèves.", color: "#0E8A43" },
  { icon: Activity, label: "Santé", desc: "Accès aux soins pour tous, couverture maladie universelle et hôpitaux modernes.", color: "#123A7A" },
  { icon: Leaf, label: "Agriculture", desc: "Modernisation agricole, soutien aux paysans et souveraineté alimentaire.", color: "#0E8A43" },
  { icon: Star, label: "Jeunesse", desc: "Emploi, formation professionnelle et espaces culturels pour notre jeunesse.", color: "#F4B400" },
  { icon: Award, label: "Entrepreneuriat", desc: "Crédit accessible, accompagnement des PME et zones économiques spéciales.", color: "#123A7A" },
  { icon: Globe, label: "Numérique", desc: "Transition digitale, internet haut débit rural et formation aux métiers du futur.", color: "#0E8A43" },
  { icon: Building2, label: "Infrastructures", desc: "Routes, ponts, eau potable et énergie pour désenclaver le territoire.", color: "#123A7A" },
  { icon: TreePine, label: "Environnement", desc: "Protection des forêts, énergies renouvelables et lutte contre les changements climatiques.", color: "#0E8A43" },
];

const actualites = [
  {
    id: 1,
    date: "5 juillet 2026",
    title: "ADERE lance son programme pour les jeunes entrepreneurs",
    excerpt: "Le parti annonce un fonds de 50 milliards FCFA pour soutenir la création d'entreprises chez les jeunes de 18 à 35 ans.",
    img: "https://images.unsplash.com/photo-1700939770496-d9213021ed4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Économie",
  },
  {
    id: 2,
    date: "2 juillet 2026",
    title: "Grand meeting national à Abidjan : 50 000 militants mobilisés",
    excerpt: "Le président du parti a réaffirmé les engagements d'ADERE devant une foule historique au Palais des Sports.",
    img: "https://images.unsplash.com/photo-1734866689982-2afd07eb149a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Politique",
  },
  {
    id: 3,
    date: "28 juin 2026",
    title: "ADERE et l'UE signent un accord de coopération pour l'éducation",
    excerpt: "Un partenariat historique pour renforcer la qualité de l'enseignement primaire et secondaire au Gabon.",
    img: EDU_IMG.replace("w=1080", "w=400"),
    category: "International",
  },
];

const agenda = [
  { date: "10", month: "Juil", title: "Assemblée nationale des militants", lieu: "Abidjan — Palais des Congrès", heure: "9h00 – 18h00" },
  { date: "17", month: "Juil", title: "Forum Jeunesse & Entrepreneuriat", lieu: "Bouaké — Hôtel du District", heure: "8h00 – 17h00" },
  { date: "24", month: "Juil", title: "Conférence sur l'agriculture durable", lieu: "Yamoussoukro — Palais des Sports", heure: "10h00 – 16h00" },
  { date: "2", month: "Août", title: "Inauguration du siège régional Nord", lieu: "Korhogo — Siège ADERE Nord", heure: "11h00" },
];

const testimonials = [
  { name: "Kouamé Adjoumani", role: "Enseignant, Abidjan", text: "ADERE représente l'espoir d'une nouvelle génération politique. Leurs propositions pour l'éducation sont concrètes et ambitieuses.", avatar: "KA" },
  { name: "Fatou Diallo", role: "Agricultrice, Bouaké", text: "Enfin un parti qui pense à nous, les paysans. Le programme agricole d'ADERE va transformer notre quotidien.", avatar: "FD" },
  { name: "Dr. Bertrand Konan", role: "Médecin, San-Pédro", text: "La couverture maladie universelle portée par ADERE est une révolution pour notre système de santé. J'y crois profondément.", avatar: "BK" },
  { name: "Aminata Traoré", role: "Étudiante en droit, Abidjan", text: "ADERE, c'est le parti de ma génération. Des valeurs claires, un programme ambitieux et une vision pour notre avenir.", avatar: "AT" },
];

const stats = [
  { value: 12500, label: "Adhérents", suffix: "+" },
  { value: 85, label: "Sections locales", suffix: "" },
  { value: 31, label: "Régions couvertes", suffix: "" },
  { value: 200, label: "Projets réalisés", suffix: "+" },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("fr-FR")}{suffix}
    </span>
  );
}

export function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 lg:pt-20">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMG}
            alt="Citoyens gabonais"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(14,138,67,0.88) 0%, rgba(18,58,122,0.80) 100%)" }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs mb-6 uppercase tracking-widest"
              style={{ backgroundColor: "rgba(244,180,0,0.2)", border: "1px solid rgba(244,180,0,0.5)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
            >
              Alliance Démocratique et Républicaine
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Construire le Gabon<br />
            <span style={{ color: "#F4B400" }}>de demain, ensemble</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.88)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}
          >
            L'ADERE s'engage pour une démocratie forte, une économie inclusive et un développement durable au service de chaque citoyen gabonais.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/adhesion">
              <button
                className="px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                style={{ backgroundColor: "#F4B400", color: "#1a202c", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
              >
                Rejoindre ADERE
              </button>
            </Link>
            <Link to="/programme">
              <button
                className="px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:bg-white hover:text-green-800 hover:-translate-y-0.5"
                style={{ border: "2px solid rgba(255,255,255,0.7)", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, backgroundColor: "transparent" }}
              >
                Notre Programme
              </button>
            </Link>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full flex items-start justify-center pt-2" style={{ border: "2px solid rgba(255,255,255,0.4)" }}>
            <div className="w-1.5 h-3 rounded-full" style={{ backgroundColor: "#F4B400" }} />
          </div>
        </motion.div>
      </section>

      {/* ── NOS VALEURS ── */}
      <section className="py-24" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Ce qui nous définit
              </div>
              <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Nos Valeurs
              </h2>
              <p className="max-w-xl mx-auto" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                Les principes fondamentaux qui guident chacune de nos actions et décisions au service du Gabon.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(14,138,67,0.12)" }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-8"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#e8f5ee" }}>
                    <v.icon size={22} style={{ color: "#0E8A43" }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#1a202c" }}>
                    {v.label}
                  </h3>
                  <p style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LE PRÉSIDENT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl" style={{ backgroundColor: "#e8f5ee", zIndex: 0 }} />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl" style={{ backgroundColor: "#F4B400", opacity: 0.3, zIndex: 0 }} />
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm" style={{ zIndex: 1, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}>
                  <ImageWithFallback
                    src="images/presi.png"
                    alt="Président ADERE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "#e8edf7", color: "#123A7A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                  Notre Leader
                </div>
                <h2 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a202c", lineHeight: 1.15 }}>
                  Dr. Emmanuel Kouassi Assouan
                </h2>
                <div className="h-1 w-16 rounded-full mb-6" style={{ backgroundColor: "#F4B400" }} />
                <p className="text-sm mb-3" style={{ color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Président fondateur de l'ADERE
                </p>
                <p className="mb-6" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1rem" }}>
                  Économiste de formation, ancien ministre et homme de terrain, Dr. Assouan a consacré trente ans de sa vie au service du Gabon. Visionnaire et pragmatique, il a fondé l'ADERE avec la conviction profonde que notre pays mérite mieux.
                </p>
                <ul className="space-y-3 mb-8">
                  {["30 ans d'expérience politique et économique", "Ancien Ministre du Développement", "Docteur en Sciences Économiques — Paris I"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={17} style={{ color: "#0E8A43", flexShrink: 0 }} />
                      <span style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.93rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/president">
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm"
                    style={{ backgroundColor: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                  >
                    Découvrir son parcours <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── NOTRE VISION ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#123A7A" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #0E8A43 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F4B400 0%, transparent 40%)" }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-6 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Notre Vision
            </div>
            <div className="flex justify-center mb-6">
              <Quote size={48} style={{ color: "rgba(244,180,0,0.4)" }} />
            </div>
            <h2
              className="mb-8 text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.3, fontStyle: "italic" }}
            >
              "Un Gabon où chaque citoyen, quelle que soit son origine ou sa condition, peut accéder à l'éducation, à la santé, à la justice et à une vie digne."
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
              L'ADERE croit en une gouvernance transparente, une économie créatrice d'emplois et un développement durable qui préserve notre patrimoine naturel pour les générations futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/parti">
                <button
                  className="px-7 py-3.5 rounded-xl text-sm hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: "#F4B400", color: "#1a202c", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                >
                  Découvrir notre projet
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── NOTRE PROGRAMME ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Nos engagements
              </div>
              <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Notre Programme
              </h2>
              <p className="max-w-xl mx-auto" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                Des engagements concrets pour transformer le Gabon dans tous les domaines essentiels de la vie citoyenne.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programmes.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(14,138,67,0.12)` }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl p-6 h-full"
                  style={{ backgroundColor: "#F6F8FA", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: p.color + "18" }}>
                    <p.icon size={20} style={{ color: p.color }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#1a202c" }}>
                    {p.label}
                  </h3>
                  <p style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/programme">
                <button
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm hover:-translate-y-0.5 transition-all duration-200"
                  style={{ backgroundColor: "#0E8A43", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                >
                  Voir le programme complet <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ACTUALITÉS ── */}
      <section className="py-24" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-3 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                  Restez informés
                </div>
                <h2 className="m-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                  Actualités
                </h2>
              </div>
              <Link to="/actualites" className="flex items-center gap-1.5 text-sm hover:gap-2.5 transition-all" style={{ color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Toutes les actualités <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actualites.map((article, i) => (
              <FadeIn key={article.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <ImageWithFallback src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#0E8A43", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs mb-3" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>{article.date}</p>
                    <h3 className="mb-3 flex-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#1a202c", lineHeight: 1.4 }}>
                      {article.title}
                    </h3>
                    <p className="text-sm mb-5" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                      {article.excerpt}
                    </p>
                    <Link to="/actualites" className="flex items-center gap-1.5 text-sm mt-auto" style={{ color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                      Lire l'article <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENDA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-3 uppercase tracking-widest" style={{ backgroundColor: "#e8edf7", color: "#123A7A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                  Nos événements
                </div>
                <h2 className="m-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                  Agenda
                </h2>
              </div>
              <Link to="/agenda" className="flex items-center gap-1.5 text-sm hover:gap-2.5 transition-all" style={{ color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Voir tout l'agenda <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {agenda.map((ev, i) => (
              <FadeIn key={ev.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 4, boxShadow: "0 8px 30px rgba(14,138,67,0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-6 bg-white rounded-2xl p-5"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.05)" }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center" style={{ backgroundColor: "#e8f5ee" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "#0E8A43", lineHeight: 1 }}>{ev.date}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#0E8A43", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{ev.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="mb-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#1a202c" }}>
                      {ev.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="flex items-center gap-1.5 text-sm" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif" }}>
                        <MapPin size={13} style={{ color: "#0E8A43" }} /> {ev.lieu}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif" }}>
                        <Calendar size={13} style={{ color: "#0E8A43" }} /> {ev.heure}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} style={{ color: "#94a3b8", flexShrink: 0 }} />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0E8A43 0%, #0a6b34 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, #F4B400 0%, transparent 50%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                ADERE en chiffres
              </h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif", marginTop: "0.5rem" }}>
                Un mouvement qui grandit, partout au Gabon
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div
                    className="text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, lineHeight: 1 }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", fontSize: "1rem" }}>
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="py-24" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-3 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Ils nous font confiance
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Témoignages
              </h2>
            </div>
          </FadeIn>
          <div className="relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 text-center"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
            >
              <Quote size={36} style={{ color: "#0E8A43", opacity: 0.3, margin: "0 auto 1.5rem" }} />
              <p className="mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", color: "#1a202c", lineHeight: 1.7, fontStyle: "italic" }}>
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1a202c" }}>
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#4A5568" }}>
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? 24 : 8,
                    height: 8,
                    backgroundColor: i === activeTestimonial ? "#0E8A43" : "#cbd5e0",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#fff8e1", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Restez connectés
            </div>
            <h2 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#1a202c" }}>
              Recevez nos actualités
            </h2>
            <p className="mb-8" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
              Inscrivez-vous à notre newsletter et soyez les premiers informés de nos actions, événements et déclarations.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => { e.preventDefault(); setEmail(""); alert("Merci pour votre inscription !"); }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                required
                className="flex-1 px-4 py-3 rounded-xl outline-none border"
                style={{ fontFamily: "'DM Sans', sans-serif", borderColor: "rgba(0,0,0,0.12)", fontSize: "0.95rem" }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-white text-sm hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}
              >
                S'inscrire
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
