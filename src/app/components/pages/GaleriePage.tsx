import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Play, X, Camera, Video } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "../figma/ImageWithFallback";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1552710307-8d1c604d6319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Meeting national ADERE", cat: "Meetings" },
  { id: 2, src: "https://images.unsplash.com/photo-1700939770496-d9213021ed4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Jeunesse ADERE", cat: "Jeunesse" },
  { id: 3, src: "https://images.unsplash.com/photo-1734866689982-2afd07eb149a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Actions communautaires", cat: "Terrain" },
  { id: 4, src: "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Programme éducation", cat: "Programmes" },
  { id: 5, src: "https://images.unsplash.com/photo-1612813561206-b5db45fb4068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Le Président en déplacement", cat: "Président" },
  { id: 6, src: "https://images.unsplash.com/photo-1612813560949-e1d3f2774c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Le Président discours", cat: "Président" },
  { id: 7, src: "https://images.unsplash.com/photo-1562774207-e20d9ad4b566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Développement urbain", cat: "Programmes" },
  { id: 8, src: "https://images.unsplash.com/photo-1771495604392-2008757fb32a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Infrastructure Abidjan", cat: "Terrain" },
  { id: 9, src: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Santé communautaire", cat: "Programmes" },
  { id: 10, src: "https://images.unsplash.com/photo-1603980186326-c613ce08dcb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Agriculture gabonaise", cat: "Terrain" },
  { id: 11, src: "https://images.unsplash.com/photo-1712100743761-5e20dc82c44c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Militant ADERE", cat: "Meetings" },
  { id: 12, src: "https://images.unsplash.com/photo-1766330301961-6366c58297d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80", alt: "Travaux d'infrastructure", cat: "Programmes" },
];

const videos = [
  { id: 1, title: "Discours fondateur du Président", date: "Janvier 2018", duration: "12:34", thumbnail: "https://images.unsplash.com/photo-1612813561206-b5db45fb4068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { id: 2, title: "Meeting national — Abidjan 2026", date: "Juillet 2026", duration: "1:05:22", thumbnail: "https://images.unsplash.com/photo-1552710307-8d1c604d6319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { id: 3, title: "Présentation du programme ADERE", date: "Juin 2026", duration: "45:10", thumbnail: "https://images.unsplash.com/photo-1771495604392-2008757fb32a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { id: 4, title: "Forum Jeunesse — Bouaké 2026", date: "Mai 2026", duration: "32:15", thumbnail: "https://images.unsplash.com/photo-1700939770496-d9213021ed4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { id: 5, title: "Visite du siège régional Nord", date: "Avril 2026", duration: "18:40", thumbnail: "https://images.unsplash.com/photo-1562774207-e20d9ad4b566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
  { id: 6, title: "Conférence agricole — Yamoussoukro", date: "Mars 2026", duration: "28:55", thumbnail: "https://images.unsplash.com/photo-1603980186326-c613ce08dcb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80" },
];

const photoCats = ["Toutes", "Meetings", "Président", "Terrain", "Jeunesse", "Programmes"];

export function GaleriePage() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [photoFilter, setPhotoFilter] = useState("Toutes");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filteredPhotos = photoFilter === "Toutes" ? photos : photos.filter((p) => p.cat === photoFilter);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0E8A43 0%, #123A7A 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs mb-5 uppercase tracking-widest" style={{ backgroundColor: "rgba(244,180,0,0.15)", border: "1px solid rgba(244,180,0,0.4)", color: "#F4B400", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
              En images & en vidéos
            </div>
            <h1 className="mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.15 }}>
              Galerie
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Revivez les moments forts de l'ADERE à travers nos photos et vidéos d'événements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F6F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <FadeIn>
            <div className="flex gap-2 mb-10 p-1 rounded-xl bg-white w-fit mx-auto" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              {[
                { key: "photos", label: "Photos", icon: Camera },
                { key: "videos", label: "Vidéos", icon: Video },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setTab(key as "photos" | "videos")}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm transition-all duration-200"
                  style={{
                    backgroundColor: tab === key ? "#0E8A43" : "transparent",
                    color: tab === key ? "white" : "#4A5568",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: tab === key ? 600 : 400,
                  }}
                >
                  <Icon size={15} /> {label}
                </button>
              ))}
            </div>
          </FadeIn>

          {tab === "photos" && (
            <>
              {/* Photo filters */}
              <FadeIn>
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {photoCats.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setPhotoFilter(cat)}
                      className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                      style={{
                        backgroundColor: photoFilter === cat ? "#0E8A43" : "white",
                        color: photoFilter === cat ? "white" : "#4A5568",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: photoFilter === cat ? 600 : 400,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </FadeIn>
              {/* Masonry grid */}
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
                <Masonry gutter="16px">
                  {filteredPhotos.map((photo, i) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-2xl cursor-pointer group"
                      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                      onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
                    >
                      <ImageWithFallback src={photo.src} alt={photo.alt} className="w-full object-cover" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" style={{ background: "linear-gradient(to top, rgba(14,138,67,0.7) 0%, transparent 60%)" }}>
                        <div className="p-4">
                          <span className="text-white text-sm" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{photo.alt}</span>
                          <span className="ml-2 px-2 py-0.5 rounded text-xs" style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "white", fontFamily: "'DM Sans', sans-serif" }}>{photo.cat}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </>
          )}

          {tab === "videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, i) => (
                <FadeIn key={video.id} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                    className="bg-white rounded-2xl overflow-hidden cursor-pointer"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <ImageWithFallback src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                        <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110" style={{ backgroundColor: "#0E8A43" }}>
                          <Play size={22} color="white" style={{ marginLeft: 3 }} />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-1 rounded text-xs" style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "white", fontFamily: "'DM Sans', sans-serif" }}>
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1a202c", fontSize: "0.95rem", lineHeight: 1.4 }}>
                        {video.title}
                      </h3>
                      <p style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem" }}>
                        {video.date}
                      </p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
              <X size={20} color="white" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
