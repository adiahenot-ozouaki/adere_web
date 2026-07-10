import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, CheckCircle } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const contactInfos = [
  { icon: MapPin, label: "Adresse", value: "Boulevard de la République\nCocody, Abidjan — Gabon", color: "#0E8A43" },
  { icon: Phone, label: "Téléphone", value: "+225 07 00 00 00 00\n+225 27 00 00 00 00", color: "#123A7A" },
  { icon: Mail, label: "E-mail", value: "contact@adere-ci.org\npresse@adere-ci.org", color: "#0E8A43" },
  { icon: Clock, label: "Horaires", value: "Lundi – Vendredi : 8h00 – 18h00\nSamedi : 9h00 – 13h00", color: "#123A7A" },
];

const subjects = [
  "Demande d'information", "Adhésion au parti", "Demande de partenariat",
  "Presse / Médias", "Signalement / Doléance", "Autre",
];

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "#1a202c",
    backgroundColor: "#F6F8FA",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    outline: "none",
    border: "1.5px solid rgba(0,0,0,0.1)",
    width: "100%",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#4A5568",
    marginBottom: "0.4rem",
    display: "block",
  } as const;

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #123A7A 0%, #0E8A43 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Nous écrire
            </div>
            <h1 className="mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15 }}>
              Contactez l'ADERE
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Notre équipe est à votre disposition pour répondre à toutes vos questions et prendre en compte vos suggestions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <FadeIn className="lg:col-span-2">
              <div className="space-y-5">
                {contactInfos.map((info, i) => (
                  <div
                    key={info.label}
                    className="flex gap-4 items-start bg-white rounded-2xl p-5"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: info.color + "15" }}>
                      <info.icon size={20} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: info.color, fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                        {info.label}
                      </div>
                      <div style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.93rem", lineHeight: 1.6 }}>
                        {info.value.split("\n").map((line, j) => (
                          <div key={j}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social */}
                <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <div className="text-xs mb-3 uppercase tracking-wider" style={{ color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                    Réseaux sociaux
                  </div>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, label: "Facebook" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Instagram, label: "Instagram" },
                    ].map(({ icon: Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        style={{ backgroundColor: "#e8f5ee" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0E8A43")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#e8f5ee")}
                      >
                        <Icon size={17} style={{ color: "#0E8A43" }} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form + Map */}
            <FadeIn delay={0.1} className="lg:col-span-3">
              {/* Map */}
              <div className="rounded-2xl overflow-hidden mb-6" style={{ height: 220, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                <iframe
                  title="Localisation ADERE"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-3.9928,5.2919,-3.8928,5.3919&layer=mapnik&marker=5.3419,-3.9428"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              {/* Form */}
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl p-10 text-center"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#e8f5ee" }}>
                    <CheckCircle size={32} style={{ color: "#0E8A43" }} />
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#1a202c" }}>
                    Message envoyé !
                  </h3>
                  <p style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais, généralement sous 24 à 48 heures.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ nom: "", email: "", sujet: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 rounded-xl text-sm"
                    style={{ backgroundColor: "#0E8A43", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                  <h3 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#1a202c" }}>
                    Envoyez-nous un message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label style={labelStyle}>Nom complet *</label>
                      <input name="nom" type="text" required value={form.nom} onChange={handleChange} placeholder="Votre nom" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Adresse e-mail *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="votre@email.com" style={inputStyle} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label style={labelStyle}>Sujet *</label>
                    <select name="sujet" required value={form.sujet} onChange={handleChange} style={{ ...inputStyle, appearance: "none" as const }}>
                      <option value="">Choisissez un sujet...</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Votre message..."
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, boxShadow: "0 8px 30px rgba(14,138,67,0.25)" }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-white flex items-center justify-center gap-2 text-sm"
                    style={{ backgroundColor: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                  >
                    <Send size={16} />
                    Envoyer le message
                  </motion.button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
