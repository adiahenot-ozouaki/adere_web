import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, MapPin, Clock, ChevronRight, Filter } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const events = [
  { id: 1, date: "10", month: "Jul", year: "2026", title: "Assemblée nationale des militants ADERE", lieu: "Abidjan — Palais des Congrès", heure: "9h00 – 18h00", type: "Assemblée", desc: "Grande réunion annuelle des délégués régionaux pour faire le bilan de l'année et définir les orientations stratégiques du parti.", featured: true },
  { id: 2, date: "14", month: "Jul", year: "2026", title: "Journée Nationale de la Jeunesse ADERE", lieu: "Abidjan — Stade Félix Houphouët-Boigny", heure: "10h00 – 22h00", type: "Événement", desc: "Grande célébration nationale de la jeunesse gabonaise : discours, animations culturelles, sportives et remise de prix aux jeunes talents.", featured: false },
  { id: 3, date: "17", month: "Jul", year: "2026", title: "Forum Jeunesse & Entrepreneuriat", lieu: "Bouaké — Hôtel du District", heure: "8h00 – 17h00", type: "Forum", desc: "Deux jours de conférences, ateliers pratiques et networking pour les jeunes entrepreneurs de la région du Centre.", featured: false },
  { id: 4, date: "24", month: "Jul", year: "2026", title: "Conférence nationale sur l'agriculture durable", lieu: "Yamoussoukro — Palais des Sports", heure: "10h00 – 16h00", type: "Conférence", desc: "Experts, agriculteurs et décideurs réunis pour présenter les solutions innovantes portées par ADERE pour moderniser l'agriculture gabonaise.", featured: false },
  { id: 5, date: "2", month: "Août", year: "2026", title: "Inauguration du siège régional Nord", lieu: "Korhogo — Siège ADERE Nord", heure: "11h00", type: "Inauguration", desc: "Cérémonie d'ouverture du nouveau siège de l'ADERE pour la région Nord, symbole de l'ancrage territorial du parti.", featured: false },
  { id: 6, date: "15", month: "Août", year: "2026", title: "Marche citoyenne pour l'éducation", lieu: "San-Pédro — Esplanade de la Mairie", heure: "7h00 – 12h00", type: "Mobilisation", desc: "Marche pacifique pour sensibiliser aux enjeux de l'éducation et présenter les propositions d'ADERE pour améliorer le système scolaire.", featured: false },
  { id: 7, date: "5", month: "Sep", year: "2026", title: "Grand meeting présidentiel", lieu: "Abidjan — Stade Houphouët-Boigny", heure: "15h00 – 21h00", type: "Meeting", desc: "Meeting présidentiel historique pour le lancement officiel de la campagne d'ADERE pour les élections présidentielles.", featured: true },
  { id: 8, date: "20", month: "Sep", year: "2026", title: "Caravane de l'espoir — Tournée nationale", lieu: "Départ : Man — arrivée : Abengourou", heure: "Toute la journée", type: "Tournée", desc: "Grande caravane nationale traversant 15 villes et 800 km, à la rencontre des citoyens dans leurs quartiers et villages.", featured: false },
];

const typeColors: Record<string, string> = {
  "Assemblée": "#123A7A",
  "Forum": "#0E8A43",
  "Conférence": "#0E8A43",
  "Inauguration": "#F4B400",
  "Mobilisation": "#123A7A",
  "Meeting": "#0E8A43",
  "Tournée": "#F4B400",
  "Événement": "#0E8A43",
};

const calendarDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
// July 2026 starts on Wednesday (index 2)
const calendarOffset = 2;
const daysInJuly = 31;
const eventDates = [10, 14, 17, 24];

export function AgendaPage() {
  const [filter, setFilter] = useState("Tous");
  const types = ["Tous", ...Array.from(new Set(events.map((e) => e.type)))];

  const filtered = filter === "Tous" ? events : events.filter((e) => e.type === filter);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #123A7A 0%, #0E8A43 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Événements à venir
            </div>
            <h1 className="mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15 }}>
              Agenda
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Retrouvez tous les événements de l'ADERE : meetings, forums, conférences et mobilisations citoyennes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar widget */}
            <FadeIn className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 sticky top-24" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#1a202c" }}>Juillet 2026</h3>
                  <Calendar size={18} style={{ color: "#0E8A43" }} />
                </div>
                {/* Days header */}
                <div className="grid grid-cols-7 mb-2">
                  {calendarDays.map((d) => (
                    <div key={d} className="text-center text-xs py-1" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                      {d}
                    </div>
                  ))}
                </div>
                {/* Days grid */}
                <div className="grid grid-cols-7 gap-0.5">
                  {Array.from({ length: calendarOffset }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInJuly }).map((_, i) => {
                    const day = i + 1;
                    const hasEvent = eventDates.includes(day);
                    const isToday = day === 7;
                    return (
                      <div
                        key={day}
                        className="aspect-square flex items-center justify-center text-xs rounded-lg"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: hasEvent ? 700 : 400,
                          backgroundColor: hasEvent ? "#0E8A43" : isToday ? "#F6F8FA" : "transparent",
                          color: hasEvent ? "white" : isToday ? "#0E8A43" : "#4A5568",
                          border: isToday ? "2px solid #0E8A43" : "none",
                          cursor: hasEvent ? "pointer" : "default",
                        }}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
                {/* Legend */}
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: "#0E8A43" }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#4A5568" }}>
                      Jour d'événement
                    </span>
                  </div>
                </div>
                {/* Type filter */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Filter size={14} style={{ color: "#4A5568" }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#1a202c" }}>
                      Filtrer par type
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {types.map((t) => (
                      <button
                        key={t}
                        onClick={() => setFilter(t)}
                        className="px-3 py-1 rounded-full text-xs transition-all"
                        style={{
                          backgroundColor: filter === t ? "#0E8A43" : "#F6F8FA",
                          color: filter === t ? "white" : "#4A5568",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: filter === t ? 600 : 400,
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Events list */}
            <div className="lg:col-span-2 space-y-4">
              {filtered.map((ev, i) => (
                <FadeIn key={ev.id} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ x: 3, boxShadow: "0 8px 30px rgba(14,138,67,0.1)" }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl overflow-hidden"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    {ev.featured && (
                      <div className="px-5 pt-3 pb-0">
                        <span className="inline-block px-2.5 py-0.5 rounded text-xs" style={{ backgroundColor: "#fff8e1", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                          ★ Événement phare
                        </span>
                      </div>
                    )}
                    <div className="flex gap-5 p-5">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center" style={{ backgroundColor: "#e8f5ee" }}>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0E8A43", lineHeight: 1 }}>
                          {ev.date}
                        </span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#0E8A43", fontWeight: 600, textTransform: "uppercase" }}>
                          {ev.month}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1a202c", fontSize: "1rem", lineHeight: 1.4 }}>
                            {ev.title}
                          </h3>
                          <span className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs" style={{ backgroundColor: (typeColors[ev.type] || "#0E8A43") + "18", color: typeColors[ev.type] || "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                            {ev.type}
                          </span>
                        </div>
                        <p className="text-sm mb-2 line-clamp-2" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                          {ev.desc}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="flex items-center gap-1.5 text-xs" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
                            <MapPin size={12} style={{ color: "#0E8A43" }} /> {ev.lieu}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
                            <Clock size={12} style={{ color: "#0E8A43" }} /> {ev.heure}
                          </span>
                        </div>
                      </div>
                      <ChevronRight size={16} className="flex-shrink-0 self-center" style={{ color: "#cbd5e0" }} />
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
