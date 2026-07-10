import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { BookOpen, Activity, Leaf, Star, Award, Globe, Building2, TreePine, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const domains = [
  {
    id: "education",
    icon: BookOpen,
    label: "Éducation",
    color: "#0E8A43",
    tagline: "Scolarisation universelle et excellence académique",
    intro: "L'éducation est le moteur du développement. L'ADERE s'engage à garantir un accès équitable et de qualité à l'éducation pour tous les enfants gabonais, de la maternelle à l'université.",
    engagements: [
      "Scolarisation gratuite et obligatoire de 3 à 16 ans",
      "Construction de 2 000 nouvelles salles de classe d'ici 2030",
      "Formation et revalorisation salariale des enseignants",
      "Dotation en manuels scolaires pour tous les élèves",
      "Création de 50 lycées d'excellence dans les zones rurales",
      "Bourses mérite pour les 10 meilleurs élèves de chaque département",
      "Digitalisation des apprentissages et tablettes pour les collèges",
      "Programme d'alphabétisation pour les adultes en zones rurales",
    ],
  },
  {
    id: "sante",
    icon: Activity,
    label: "Santé",
    color: "#123A7A",
    tagline: "Couverture maladie universelle et soins de qualité",
    intro: "La santé est un droit fondamental. Notre programme vise à garantir à chaque gabonais l'accès à des soins de qualité, quel que soit son revenu ou sa localisation géographique.",
    engagements: [
      "Couverture Maladie Universelle étendue à toute la population",
      "Construction de 100 centres de santé en zones rurales",
      "Recrutement de 5 000 agents de santé supplémentaires",
      "Gratuité des soins pour les enfants de moins de 5 ans",
      "Programme national de prévention et de vaccination",
      "Modernisation des hôpitaux régionaux et CHU",
      "Formation spécialisée en cardiologie, oncologie et pédiatrie",
      "Campagnes de sensibilisation aux maladies non-transmissibles",
    ],
  },
  {
    id: "agriculture",
    icon: Leaf,
    label: "Agriculture",
    color: "#0E8A43",
    tagline: "Modernisation agricole et souveraineté alimentaire",
    intro: "le Gabon dispose d'un potentiel agricole exceptionnel. L'ADERE veut transformer ce secteur en véritable moteur de développement économique pour nos paysans et nos régions.",
    engagements: [
      "Soutien aux coopératives agricoles et agroalimentaires",
      "Accès au crédit agricole à taux préférentiel",
      "Mécanisation progressive de l'agriculture familiale",
      "Création de zones agro-industrielles dans chaque région",
      "Valorisation des produits locaux : cacao, café, anacarde",
      "Irrigation et gestion durable de l'eau agricole",
      "Formation des agriculteurs aux techniques modernes",
      "Prix garanti pour les producteurs de cultures vivrières",
    ],
  },
  {
    id: "jeunesse",
    icon: Star,
    label: "Jeunesse",
    color: "#F4B400",
    tagline: "Emploi, formation et épanouissement des jeunes",
    intro: "La jeunesse gabonaise est notre ressource la plus précieuse. Nous voulons lui offrir les outils pour s'épanouir, entreprendre et contribuer au développement du pays.",
    engagements: [
      "Création de 500 000 emplois jeunes d'ici 2030",
      "Programme national de stages en entreprise",
      "Centres de formation professionnelle dans chaque ville",
      "Fonds jeunes entrepreneurs : 50 milliards FCFA",
      "Espaces culturels et sportifs dans chaque commune",
      "Service civique volontaire rémunéré",
      "Réforme de l'enseignement technique et professionnel",
      "Programme de mentorat entreprise-jeunesse",
    ],
  },
  {
    id: "entrepreneuriat",
    icon: Award,
    label: "Entrepreneuriat",
    color: "#123A7A",
    tagline: "Un écosystème favorable aux entrepreneurs gabonais",
    intro: "L'initiative privée est le moteur de la croissance. L'ADERE créera les conditions pour que les entrepreneurs gabonais puissent créer, innover et réussir.",
    engagements: [
      "Simplification administrative : création d'entreprise en 24h",
      "Zones économiques spéciales à fiscalité allégée",
      "Banque publique d'investissement pour les PME",
      "Accompagnement des startups : incubateurs régionaux",
      "Protection de la propriété intellectuelle renforcée",
      "Accès aux marchés publics facilité pour les PME locales",
      "Programme export vers les marchés africains et internationaux",
      "Formation à la gestion et à l'entrepreneuriat dans les lycées",
    ],
  },
  {
    id: "numerique",
    icon: Globe,
    label: "Numérique",
    color: "#0E8A43",
    tagline: "Transition digitale pour un Gabon connectée",
    intro: "Le numérique est la révolution de notre époque. L'ADERE placera la transformation digitale au cœur de sa stratégie de développement pour ne laisser personne derrière.",
    engagements: [
      "Internet haut débit dans toutes les communes rurales",
      "Fibre optique couvrant 80% du territoire d'ici 2030",
      "E-gouvernement : services publics entièrement numérisés",
      "Formation au numérique pour 1 million de citoyens",
      "Création d'un Silicon Valley gabonais à Abidjan",
      "Cybersécurité nationale renforcée",
      "Identité numérique sécurisée pour chaque citoyen",
      "Télémédecine et e-éducation déployées à l'échelle nationale",
    ],
  },
  {
    id: "infrastructures",
    icon: Building2,
    label: "Infrastructures",
    color: "#123A7A",
    tagline: "Des routes, de l'eau et de l'énergie pour tous",
    intro: "Le développement du pays passe par des infrastructures modernes. L'ADERE s'engage à un programme massif de construction et de réhabilitation sur tout le territoire.",
    engagements: [
      "5 000 km de routes bitumées dans les zones enclavées",
      "Eau potable pour 95% de la population d'ici 2030",
      "Électrification de 100% des villages d'ici 2028",
      "Construction de 10 nouveaux ponts sur les fleuves majeurs",
      "Réhabilitation du réseau ferroviaire national",
      "Ports secs intérieurs pour désenclaver les régions",
      "Logements sociaux : 100 000 unités en 5 ans",
      "Rénovation des marchés et centres commerciaux",
    ],
  },
  {
    id: "environnement",
    icon: TreePine,
    label: "Environnement",
    color: "#0E8A43",
    tagline: "Préserver notre planète pour les générations futures",
    intro: "le Gabon est riche de son patrimoine naturel. L'ADERE s'engage à le protéger et à construire une économie verte, respectueuse de l'environnement.",
    engagements: [
      "Reforestation de 1 million d'hectares en 10 ans",
      "Interdiction des plastiques à usage unique d'ici 2027",
      "Transition vers les énergies renouvelables : 40% d'ici 2030",
      "Taxe carbone sur les grandes entreprises industrielles",
      "Protection stricte des parcs nationaux et réserves",
      "Gestion durable des déchets dans toutes les communes",
      "Agriculture biologique encouragée et certifiée",
      "Education environnementale intégrée aux programmes scolaires",
    ],
  },
];

export function ProgrammePage() {
  const [active, setActive] = useState(domains[0].id);
  const activeDomain = domains.find((d) => d.id === active)!;

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0E8A43 0%, #123A7A 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, #F4B400 0%, transparent 50%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Nos engagements
            </div>
            <h1 className="mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15 }}>
              Notre Programme
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1.1rem" }}>
              Huit domaines d'action, des engagements concrets et mesurables pour transformer le Gabon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programme content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Domain selector */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {domains.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => setActive(domain.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm transition-all duration-200"
                  style={{
                    backgroundColor: active === domain.id ? domain.color : "#F6F8FA",
                    color: active === domain.id ? "white" : "#4A5568",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: active === domain.id ? 600 : 400,
                    boxShadow: active === domain.id ? `0 4px 15px ${domain.color}40` : "none",
                  }}
                >
                  <domain.icon size={15} />
                  {domain.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Active domain detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-3xl p-8" style={{ backgroundColor: activeDomain.color + "12" }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: activeDomain.color }}>
                    <activeDomain.icon size={26} color="white" />
                  </div>
                  <h2 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#1a202c" }}>
                    {activeDomain.label}
                  </h2>
                  <div className="h-1 w-12 rounded-full mb-4" style={{ backgroundColor: activeDomain.color }} />
                  <p className="mb-6 italic" style={{ color: "#4A5568", fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", lineHeight: 1.6 }}>
                    "{activeDomain.tagline}"
                  </p>
                  <p style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "0.93rem" }}>
                    {activeDomain.intro}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#1a202c" }}>
                  Nos engagements concrets
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeDomain.engagements.map((eng, i) => (
                    <motion.div
                      key={eng}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 rounded-xl p-4"
                      style={{ backgroundColor: "#F6F8FA" }}
                    >
                      <CheckCircle2 size={18} style={{ color: activeDomain.color, flexShrink: 0, marginTop: 1 }} />
                      <span style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                        {eng}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All domains overview */}
      <section className="py-24" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a202c" }}>
                Tous nos domaines d'action
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {domains.map((d, i) => (
              <FadeIn key={d.id} delay={i * 0.06}>
                <motion.button
                  whileHover={{ y: -5 }}
                  onClick={() => { setActive(d.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="w-full text-left rounded-2xl p-6 transition-all duration-200"
                  style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: d.color + "18" }}>
                    <d.icon size={20} style={{ color: d.color }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#1a202c" }}>
                    {d.label}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                    {d.tagline}
                  </p>
                  <span className="flex items-center gap-1 text-xs" style={{ color: d.color, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                    Voir les engagements <ArrowRight size={12} />
                  </span>
                </motion.button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#1a202c" }}>
              Rejoignez le mouvement
            </h2>
            <p className="mb-8" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
              Ce programme est le nôtre, construit ensemble avec des milliers de citoyens. Rejoignez ADERE et aidez-nous à le réaliser.
            </p>
            <Link to="/adhesion">
              <button className="px-8 py-4 rounded-xl text-white text-sm" style={{ backgroundColor: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                Adhérer à l'ADERE
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
