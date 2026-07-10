import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, Users, Shield, Heart, TrendingUp, Send, CheckCircle } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const reasons = [
  { icon: Shield, title: "Défendre vos valeurs", desc: "Rejoignez un mouvement ancré dans la démocratie, la justice et la transparence." },
  { icon: Users, title: "Rejoindre une communauté", desc: "Intégrez un réseau de 12 500 citoyens engagés dans toutes les régions du Gabon." },
  { icon: TrendingUp, title: "Agir pour le changement", desc: "Participez concrètement aux décisions du parti et aux actions sur le terrain." },
  { icon: Heart, title: "Servir votre pays", desc: "Contribuez à bâtir le Gabon de demain pour les générations futures." },
];

const professions = [
  "Étudiant(e)", "Enseignant(e)", "Médecin / Professionnel de santé",
  "Agriculteur(trice)", "Entrepreneur(e) / Chef d'entreprise", "Fonctionnaire",
  "Commerçant(e)", "Artisan(e)", "Journaliste / Communicant", "Autre",
];

const regions = [
  "Abidjan", "Yamoussoukro", "Bouaké", "Daloa", "San-Pédro",
  "Korhogo", "Man", "Gagnoa", "Divo", "Abengourou", "Autre",
];

export function AdhesionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nom: "", prenom: "", telephone: "", email: "",
    profession: "", ville: "", message: "", acceptCGU: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inputStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "#1a202c",
    borderColor: "rgba(0,0,0,0.12)",
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
  };

  if (submitted) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F6F8FA" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto px-4 text-center"
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#e8f5ee" }}>
            <CheckCircle size={40} style={{ color: "#0E8A43" }} />
          </div>
          <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#1a202c" }}>
            Bienvenue dans l'ADERE !
          </h2>
          <p className="mb-3" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8 }}>
            <strong>{form.prenom} {form.nom}</strong>, votre demande d'adhésion a bien été reçue. Notre équipe vous contactera dans les 48 heures pour finaliser votre inscription.
          </p>
          <p className="mb-8" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Un email de confirmation vous a été envoyé à <strong>{form.email}</strong>.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ nom: "", prenom: "", telephone: "", email: "", profession: "", ville: "", message: "", acceptCGU: false }); }}
            className="px-6 py-3 rounded-xl text-sm"
            style={{ backgroundColor: "#0E8A43", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0E8A43 0%, #0a6b34 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, #F4B400 0%, transparent 50%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Rejoignez le mouvement
            </div>
            <h1 className="mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15 }}>
              Devenez membre de l'ADERE
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Chaque engagement compte. En adhérant à l'ADERE, vous devenez acteur du changement que vous voulez voir au Gabon.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Reasons */}
            <FadeIn className="lg:col-span-2">
              <div className="sticky top-24">
                <h2 className="mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#1a202c" }}>
                  Pourquoi rejoindre l'ADERE ?
                </h2>
                <div className="space-y-5">
                  {reasons.map((r, i) => (
                    <div key={r.title} className="flex gap-4 items-start">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#e8f5ee" }}>
                        <r.icon size={20} style={{ color: "#0E8A43" }} />
                      </div>
                      <div>
                        <h4 className="mb-1" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#1a202c", fontSize: "0.95rem" }}>
                          {r.title}
                        </h4>
                        <p style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", lineHeight: 1.6 }}>
                          {r.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Guarantees */}
                <div className="mt-8 rounded-2xl p-6" style={{ backgroundColor: "#e8edf7" }}>
                  <p className="mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#123A7A", fontSize: "0.9rem" }}>
                    ✓ Vos engagements avec l'ADERE
                  </p>
                  {["Adhésion gratuite et sans condition", "Vos données personnelles protégées", "Participation active aux décisions du parti", "Accès aux événements membres en priorité"].map((item) => (
                    <div key={item} className="flex items-center gap-2 mb-2 last:mb-0">
                      <CheckCircle2 size={14} style={{ color: "#123A7A", flexShrink: 0 }} />
                      <span style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn delay={0.15} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10" style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}>
                <h3 className="mb-7" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#1a202c" }}>
                  Formulaire d'adhésion
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Nom *</label>
                    <input name="nom" type="text" required value={form.nom} onChange={handleChange} placeholder="Votre nom de famille" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Prénom *</label>
                    <input name="prenom" type="text" required value={form.prenom} onChange={handleChange} placeholder="Votre prénom" style={inputStyle} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Téléphone *</label>
                    <input name="telephone" type="tel" required value={form.telephone} onChange={handleChange} placeholder="+225 07 00 00 00 00" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Adresse e-mail *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="votre@email.com" style={inputStyle} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label style={labelStyle}>Profession *</label>
                    <select name="profession" required value={form.profession} onChange={handleChange} style={{ ...inputStyle, appearance: "none" }}>
                      <option value="">Sélectionnez...</option>
                      {professions.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Ville / Région *</label>
                    <select name="ville" required value={form.ville} onChange={handleChange} style={{ ...inputStyle, appearance: "none" }}>
                      <option value="">Sélectionnez...</option>
                      {regions.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label style={labelStyle}>Message (optionnel)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Pourquoi souhaitez-vous rejoindre l'ADERE ? Avez-vous des compétences particulières à apporter ?"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <div className="flex items-start gap-3 mb-7">
                  <input
                    type="checkbox"
                    name="acceptCGU"
                    id="acceptCGU"
                    required
                    checked={form.acceptCGU}
                    onChange={handleChange}
                    className="mt-1"
                    style={{ accentColor: "#0E8A43", width: 16, height: 16 }}
                  />
                  <label htmlFor="acceptCGU" style={{ ...labelStyle, marginBottom: 0, cursor: "pointer", fontWeight: 400, fontSize: "0.88rem", lineHeight: 1.5 }}>
                    J'accepte les <span style={{ color: "#0E8A43", fontWeight: 600 }}>conditions d'adhésion</span> et la <span style={{ color: "#0E8A43", fontWeight: 600 }}>politique de confidentialité</span> de l'ADERE. Je certifie que les informations fournies sont exactes.
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: "0 8px 30px rgba(14,138,67,0.3)" }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-4 rounded-xl text-white flex items-center justify-center gap-2 text-base"
                  style={{ backgroundColor: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
                >
                  <Send size={18} />
                  Je rejoins l'ADERE
                </motion.button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
