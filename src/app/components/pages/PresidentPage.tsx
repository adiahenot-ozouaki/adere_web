import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const PRESIDENT_IMG = "https://images.unsplash.com/photo-1612813561206-b5db45fb4068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2ElMjBwcmVzaWRlbnQlMjBwb2xpdGljaWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzNDI0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const PRESIDENT_IMG2 = "https://images.unsplash.com/photo-1612813560949-e1d3f2774c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBZnJpY2ElMjBwcmVzaWRlbnQlMjBwb2xpdGljaWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgzNDI0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080";
const EDU_IMG = "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
const CITY_IMG = "https://images.unsplash.com/photo-1562774207-e20d9ad4b566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";
const CROWD_IMG = "https://images.unsplash.com/photo-1552710307-8d1c604d6319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const career = [
  { year: "1974", event: "Naissance à Daloa, Gabon" },
  { year: "1997", event: "Doctorat en Sciences Économiques — Université Paris I Panthéon-Sorbonne" },
  { year: "1999", event: "Retour au Gabon — Consultant auprès de la Banque Africaine de Développement" },
  { year: "2004", event: "Directeur Général de l'Agence Nationale de Développement" },
  { year: "2011", event: "Nommé Ministre du Développement et de la Planification" },
  { year: "2016", event: "Député à l'Assemblée Nationale — Circonscription de Daloa" },
  { year: "2018", event: "Fondation de l'Alliance Démocratique et Républicaine (ADERE)" },
  { year: "2026", event: "Candidature à la Présidence de la République du Gabon" },
];

const speeches = [
  {
    title: "Discours fondateur — Abidjan, Janvier 2018",
    excerpt: "\"le Gabon mérite mieux que la médiocrité et la division. Nous devons, ensemble, construire un projet politique à la hauteur des aspirations de notre peuple...\"",
    full: "Compatriotes, gabonaises et gabonais, mes chers amis. En ce jour historique, nous posons les jalons d'un projet politique nouveau, ancré dans nos valeurs communes et tourné vers notre avenir. L'ADERE n'est pas un parti comme les autres. C'est un mouvement citoyen, une alliance d'hommes et de femmes déterminés à changer les choses...",
  },
  {
    title: "Discours au Forum Économique — Yamoussoukro, 2023",
    excerpt: "\"L'économie gabonaise a les ressources naturelles, le capital humain et la position géographique pour devenir un hub régional. Il ne nous manque qu'une chose : la volonté politique.\"",
    full: "Mesdames et Messieurs, experts, chefs d'entreprise et décideurs politiques. Nous sommes réunis ici pour une raison simple : tracer ensemble la feuille de route d'un Gabon économiquement forte et socialement juste...",
  },
  {
    title: "Discours de campagne — Bouaké, Juin 2026",
    excerpt: "\"Je m'engage, devant vous et devant Dieu, à diriger ce pays avec honnêteté, humilité et dévouement. le Gabon d'abord, toujours.\"",
    full: "Mes chers compatriotes, chers habitants de Bouaké, la capitale du Valentinois et du cœur de notre nation. C'est avec une immense émotion et une profonde gratitude que je me tiens devant vous aujourd'hui...",
  },
];

export function PresidentPage() {
  const [openSpeech, setOpenSpeech] = useState<number | null>(null);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero portrait */}
      <section className="relative min-h-[60vh] flex items-end" style={{ backgroundColor: "#0a1628" }}>
        <div className="absolute inset-0">
          <ImageWithFallback src="images/presi.png" alt="Dr. Emmanuel Kouassi Assouan" className="w-full h-full object-cover object-top opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0a1628 30%, rgba(10,22,40,0.3) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Président fondateur
            </div>
            <h1 className="mb-2 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
              Dr. Emmanuel Kouassi Assouan
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem" }}>
              Économiste · Politique · Visionnaire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biographie */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <FadeIn className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}>
                  <ImageWithFallback src="images/presi.png" alt="Dr. Assouan" className="w-full aspect-[3/4] object-cover" />
                </div>
                <div className="mt-6 rounded-2xl p-5" style={{ backgroundColor: "#e8f5ee" }}>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[{ v: "30+", l: "Ans d'expérience" }, { v: "1", l: "Parti fondé" }, { v: "8", l: "Portefeuilles" }].map(s => (
                      <div key={s.l}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "#0E8A43" }}>{s.v}</div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "#4A5568" }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-3">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Biographie
              </div>
              <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1a202c" }}>
                Un homme au service de la nation
              </h2>
              {[
                "Né à Daloa en 1974, Emmanuel Kouassi Assouan a grandi dans une famille modeste de cultivateurs de cacao. C'est cette enfance simple, au contact des réalités du monde rural gabonais, qui a forgé son engagement indéfectible pour les questions de développement et d'équité sociale.",
                "Brillant élève, il obtient une bourse de mérite et rejoint l'Université de Paris I Panthéon-Sorbonne où il prépare et soutient avec les félicitations du jury une thèse de doctorat en sciences économiques portant sur les stratégies de développement en Afrique subsaharienne.",
                "De retour au Gabon en 1999, il intègre la Banque Africaine de Développement comme consultant senior avant d'être nommé, en 2004, Directeur Général de l'Agence Nationale de Développement. Sous sa direction, l'agence a accompagné plus de 500 projets dans tout le pays.",
                "En 2011, il est nommé Ministre du Développement et de la Planification, poste qu'il occupera pendant cinq ans avec une intégrité et une compétence unanimement saluées. C'est cette expérience au cœur de l'État qui l'a convaincu de la nécessité d'une réforme profonde de nos institutions politiques.",
                "En 2018, il fonde l'ADERE avec la conviction que le Gabon mérite un projet politique à la hauteur de ses ambitions et de ses ressources. Depuis lors, il parcourt le pays, à l'écoute des citoyens, construisant un programme ancré dans les réalités du terrain.",
              ].map((para, i) => (
                <p key={i} className="mb-5 last:mb-0" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.9, fontSize: "1rem" }}>
                  {para}
                </p>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-24" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#e8edf7", color: "#123A7A", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Sa trajectoire
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Parcours
              </h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ backgroundColor: "#0E8A43", opacity: 0.2 }} />
            <div className="space-y-6">
              {career.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.07}>
                  <div className="flex gap-5 items-center">
                    <div className="flex-shrink-0 relative">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#0E8A43", margin: "0 auto", position: "relative", zIndex: 1 }} />
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                      <span className="inline-block px-3 py-1 rounded-lg text-xs flex-shrink-0" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                        {item.year}
                      </span>
                      <span style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.93rem" }}>{item.event}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discours */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                Sa parole
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Discours marquants
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {speeches.map((speech, i) => (
              <FadeIn key={speech.title} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <button
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                    style={{ backgroundColor: openSpeech === i ? "#e8f5ee" : "white" }}
                    onClick={() => setOpenSpeech(openSpeech === i ? null : i)}
                  >
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#1a202c", fontWeight: 600 }}>
                      {speech.title}
                    </span>
                    {openSpeech === i ? <ChevronUp size={18} style={{ color: "#0E8A43", flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: "#94a3b8", flexShrink: 0 }} />}
                  </button>
                  {openSpeech === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="flex gap-3 mb-4">
                        <Quote size={20} style={{ color: "#0E8A43", opacity: 0.5, flexShrink: 0, marginTop: 2 }} />
                        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#1a202c", lineHeight: 1.7, fontSize: "1.05rem" }}>
                          {speech.excerpt}
                        </p>
                      </div>
                      <p style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "0.93rem" }}>
                        {speech.full}
                      </p>
                    </motion.div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-4 uppercase tracking-widest" style={{ backgroundColor: "#e8f5ee", color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                En images
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Galerie photo
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[PRESIDENT_IMG, PRESIDENT_IMG2, EDU_IMG, CITY_IMG, CROWD_IMG, PRESIDENT_IMG].map((img, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl overflow-hidden ${i === 0 ? "sm:col-span-2 aspect-[2/1]" : "aspect-square"}`}
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                >
                  <ImageWithFallback src={img} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
