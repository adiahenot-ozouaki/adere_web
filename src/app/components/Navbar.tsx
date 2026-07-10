import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
// import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
// import logo from "figma:asset/logo.PNG";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Le Parti", href: "/parti" },
  { label: "Le Président", href: "/president" },
  { label: "Programme", href: "/programme" },
  { label: "Actualités", href: "/actualites" },
  { label: "Agenda", href: "/agenda" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "0 1px 0 rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="images/logo_adere.png" alt="ADERE" className="h-10 lg:h-12 w-auto object-contain" />
            <div className="hidden sm:block">
              <div
                className="text-sm leading-tight"
                style={{ color: "#0E8A43", fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "0.05em" }}
              >
                ADERE
              </div>
              <div className="text-xs" style={{ color: "#4A5568", fontFamily: "'DM Sans', sans-serif" }}>
                Alliance Démocratique et Républicaine
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-3 py-2 text-sm rounded-lg transition-all duration-200 relative"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: isActive(link.href) ? 600 : 400,
                  color: isActive(link.href) ? "#0E8A43" : "#4A5568",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = "#0E8A43";
                }}
                onMouseLeave={(e) => {
                  if (!isActive(link.href)) (e.currentTarget as HTMLElement).style.color = "#4A5568";
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ backgroundColor: "#0E8A43" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link to="/adhesion" className="hidden md:block">
              <button
                className="px-5 py-2.5 text-sm rounded-lg text-white transition-all duration-200 hover:shadow-md active:scale-95"
                style={{
                  backgroundColor: "#0E8A43",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0a6b34")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0E8A43")}
              >
                Adhérer
              </button>
            </Link>

            {/* Mobile hamburger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 rounded-lg" style={{ color: "#4A5568" }}>
                  <Menu size={22} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-5 border-b">
                    <img src="images/logo_adere.png" alt="ADERE" className="h-10 w-auto object-contain" />
                  </div>
                  <nav className="flex flex-col p-4 gap-1 flex-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-4 py-3 rounded-lg text-sm transition-all"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: isActive(link.href) ? 600 : 400,
                          color: isActive(link.href) ? "#0E8A43" : "#4A5568",
                          backgroundColor: isActive(link.href) ? "#e8f5ee" : "transparent",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <Link to="/adhesion" onClick={() => setMobileOpen(false)}>
                      <button
                        className="w-full px-5 py-3 text-sm rounded-lg text-white"
                        style={{ backgroundColor: "#0E8A43", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
                      >
                        Adhérer à ADERE
                      </button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
