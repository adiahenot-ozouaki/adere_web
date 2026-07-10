import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Scale, Shield, Heart, TrendingUp, Users, Eye, Target, Globe, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

const CITY_IMG = "https://images.unsplash.com/photo-1771495604392-2008757fb32a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBZnJpY2ElMjBjaXR5JTIwbW9kZXJuJTIwaW5mcmFzdHJ1Y3R1cmUlMjBkZXZlbG9wbWVudCUyMHVyYmFufGVufDF8fHx8MTc4MzQyNDgwM3ww&ixlib=rb-4.1.0&q=80&w=1080";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const history = [
  { year: "2018", title: "Fondation de l'ADERE", desc: "Dr. Emmanuel Kouassi Assouan et 12 figures politiques gabonaises fondent l'Alliance Démocratique et Républicaine à Abidjan." },
  { year: "2019", title: "Première convention nationale", desc: "Plus de 5 000 délégués réunis pour adopter la charte du parti et élire les premiers dirigeants nationaux." },
  { year: "2021", title: "Implantation nationale", desc: "ADERE s'implante dans les 31 régions du Gabon avec plus de 50 sections locales actives." },
  { year: "2023", title: "Forum du développement", desc: "Organisation du premier Forum National du Développement Durable, rassemblant experts, citoyens et élus." },
  { year: "2025", title: "10 000 adhérents franchis", desc: "L'ADERE franchit le cap des 10 000 adhérents, confirmant sa place parmi les grandes forces politiques gabonaises." },
  { year: "2026", title: "Lancement du Grand Programme", desc: "Présentation du programme électoral complet, fruit de deux ans de consultation citoyenne dans tout le pays." },
];

const values = [
  { icon: Scale, label: "Démocratie", desc: "Nous croyons que le pouvoir appartient au peuple. Toutes nos décisions sont prises de manière participative et transparente." },
  { icon: Shield, label: "République", desc: "L'État de droit, la séparation des pouvoirs et le respect de la Constitution sont les fondements de notre action." },
  { icon: Scale, label: "Justice", desc: "Une justice indépendante, accessible à tous et équitable est la condition de la paix sociale et du progrès." },
  { icon: TrendingUp, label: "Développement", desc: "Le développement économique doit profiter à chaque citoyen, dans chaque région, sans exclusion ni discrimination." },
  { icon: Users, label: "Solidarité", desc: "Nous prenons soin des plus vulnérables et construisons une société où nul n'est laissé pour compte." },
  { icon: Eye, label: "Transparence", desc: "La gestion des affaires publiques doit être exemplaire. Nous nous engageons à rendre compte de chacune de nos actions." },
];

const organigramme = [
  { level: "Président", name: "Dr. Emmanuel Kouassi Assouan", color: "#0E8A43" },
  { level: "Secrétaire Général", name: "Mme. Adjoa Yobouet", color: "#123A7A" },
  { level: "Trésorier National", name: "M. Kouakou Bertin", color: "#123A7A" },
  { level: "Porte-parole", name: "Dr. Aminata Coulibaly", color: "#123A7A" },
];

export function PartiPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: "#123A7A" }}>
        <div className="absolute inset-0">
          <ImageWithFallback src={CITY_IMG} alt="Gabon" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Qui sommes-nous
            </div>
            <h1 className="mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15 }}>
              Notre Parti
            </h1>
            <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              L'ADERE, une force politique citoyenne, démocratique et républicaine, au service du peuple gabonais depuis 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="rounded-3xl p-10 h-full" style={{ backgroundColor: "#e8f5ee" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#0E8A43" }}>
                  <Target size={22} color="white" />
                </div>
                <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#1a202c" }}>Notre Mission</h2>
                <p className="mb-4" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
                  L'ADERE a pour mission de bâtir un Gabon démocratique, juste et prospère, où chaque citoyen peut s'épanouir et participer pleinement à la vie de la nation.
                </p>
                <ul className="space-y-2.5">
                  {["Renforcer les institutions démocratiques", "Promouvoir la bonne gouvernance", "Développer une économie inclusive", "Défendre les droits de chaque citoyen"].map(item => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} style={{ color: "#0E8A43", flexShrink: 0 }} />
                      <span style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.93rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-3xl p-10 h-full" style={{ backgroundColor: "#e8edf7" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#123A7A" }}>
                  <Globe size={22} color="white" />
                </div>
                <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#1a202c" }}>Notre Vision</h2>
                <p className="mb-4" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
                  Nous imaginons un Gabon 2035 où la croissance est partagée, où les institutions fonctionnent avec intégrité et où le pays rayonne sur la scène africaine et internationale.
                </p>
                <ul className="space-y-2.5">
                  {["Une économie dans le top 5 africain", "Couverture santé universelle effective", "Scolarisation à 100% jusqu'au secondaire", "Énergie verte pour tous les ménages"].map(item => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} style={{ color: "#123A7A", flexShrink: 0 }} />
                      <span style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.93rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-24" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Notre parcours
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Histoire de l'ADERE
              </h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: "#0E8A43", opacity: 0.2 }} />
            <div className="space-y-8">
              {history.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.08}>
                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-16 flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full border-4 mt-1" style={{ borderColor: "#0E8A43", backgroundColor: "white", zIndex: 1 }} />
                    </div>
                    <div className="bg-white rounded-2xl p-6 flex-1 mb-2" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                      <span className="inline-block px-3 py-1 rounded-full text-xs mb-3" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                        {item.year}
                      </span>
                      <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#1a202c" }}>
                        {item.title}
                      </h3>
                      <p style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Ce qui nous définit
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Nos Valeurs fondamentales
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.label} delay={i * 0.08}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="rounded-2xl p-8" style={{ backgroundColor: "#F6F8FA", border: "1px solid rgba(0,0,0,0.04)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#e8f5ee" }}>
                    <v.icon size={22} style={{ color: "#0E8A43" }} />
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#1a202c" }}>{v.label}</h3>
                  <p style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", lineHeight: 1.7 }}>{v.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Organigramme */}
      <section className="py-24" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#e8edf7", color: "#123A7A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Structure
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Organisation du parti
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {organigramme.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 flex items-center gap-5"
                  style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", borderLeft: `4px solid ${person.color}` }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0" style={{ backgroundColor: person.color, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                    {person.name.split(" ").filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: person.color, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{person.level}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1a202c", fontSize: "1rem" }}>{person.name}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
