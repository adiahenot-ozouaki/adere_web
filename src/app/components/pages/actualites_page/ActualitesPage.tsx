import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
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

const categories = ["Tous", "Politique", "Économie", "Social", "International", "Culture"];

const articles = [
  { id: 1, cat: "Économie", date: "5 juillet 2026", title: "ADERE lance son fonds pour les jeunes entrepreneurs gabonais", excerpt: "Le parti annonce un fonds de 50 milliards FCFA pour soutenir la création d'entreprises chez les jeunes de 18 à 35 ans à travers tout le pays.", img: "https://images.unsplash.com/photo-1700939770496-d9213021ed4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", featured: true },
  { id: 2, cat: "Politique", date: "2 juillet 2026", title: "Grand meeting national : 50 000 militants mobilisés à Abidjan", excerpt: "Le président du parti a réaffirmé les engagements d'ADERE devant une foule historique au Palais des Sports d'Abidjan.", img: "https://images.unsplash.com/photo-1552710307-8d1c604d6319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", featured: false },
  { id: 3, cat: "International", date: "28 juin 2026", title: "ADERE et l'Union Européenne signent un accord de coopération pour l'éducation", excerpt: "Un partenariat historique pour renforcer la qualité de l'enseignement primaire et secondaire au Gabon.", img: "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", featured: false },
  { id: 4, cat: "Social", date: "20 juin 2026", title: "Programme de santé : ouverture de 10 nouvelles cliniques dans le Nord", excerpt: "Dans le cadre de son programme de santé, ADERE inaugure 10 centres médicaux dans les régions du Nord du Gabon.", img: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", featured: false },
  { id: 5, cat: "Économie", date: "15 juin 2026", title: "Forum agricole d'ADERE : 1 000 agriculteurs formés aux nouvelles techniques", excerpt: "Le parti organise son premier forum agricole national, rassemblant experts, paysans et investisseurs pour moderniser le secteur.", img: "https://images.unsplash.com/photo-1603980186326-c613ce08dcb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", featured: false },
  { id: 6, cat: "Culture", date: "10 juin 2026", title: "ADERE soutient la création du premier Festival National des Arts gabonais", excerpt: "Le parti s'engage à financer et promouvoir la culture gabonaise comme vecteur d'unité nationale et de rayonnement international.", img: "https://images.unsplash.com/photo-1734866689982-2afd07eb149a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", featured: false },
];

const catColors: Record<string, string> = {
  Politique: "#123A7A",
  Économie: "#0E8A43",
  Social: "#F4B400",
  International: "#123A7A",
  Culture: "#0E8A43",
};

export function ActualitesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "Tous" || a.cat === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0E8A43 0%, #123A7A 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              Restez informés
            </div>
            <h1 className="mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15 }}>
              Actualités
            </h1>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Suivez toute l'actualité de l'ADERE, nos actions sur le terrain, nos prises de position et nos événements.
            </p>
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#94a3b8" }} />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl outline-none text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "rgba(255,255,255,0.95)" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + Articles */}
      <section className="py-16" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                  style={{
                    backgroundColor: activeCategory === cat ? "#0E8A43" : "white",
                    color: activeCategory === cat ? "white" : "#4A5568",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: activeCategory === cat ? 600 : 400,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {filtered.length === 0 ? (
            <div className="text-center py-20" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif" }}>
              Aucun article trouvé pour votre recherche.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <FadeIn key={article.id} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl overflow-hidden flex flex-col h-full"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <ImageWithFallback
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs flex items-center gap-1"
                        style={{ backgroundColor: catColors[article.cat] || "#0E8A43", color: "white", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                      >
                        <Tag size={11} /> {article.cat}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-xs mb-3" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
                        {article.date}
                      </p>
                      <h3 className="mb-3 flex-1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#1a202c", lineHeight: 1.4 }}>
                        {article.title}
                      </h3>
                      <p className="text-sm mb-5" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                        {article.excerpt}
                      </p>
                      <button
                        className="flex items-center gap-1.5 text-sm mt-auto"
                        style={{ color: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                      >
                        Lire l'article <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* Pagination */}
          <FadeIn delay={0.3}>
            <div className="flex justify-center gap-2 mt-12">
              {[1, 2, 3, "..."].map((page, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg text-sm transition-all duration-200"
                  style={{
                    backgroundColor: page === 1 ? "#0E8A43" : "white",
                    color: page === 1 ? "white" : "#4A5568",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: page === 1 ? 600 : 400,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
