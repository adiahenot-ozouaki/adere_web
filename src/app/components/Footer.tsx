import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
// import logo from "figma:asset/logo.PNG";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Le Parti", href: "/parti" },
    { label: "Le Président", href: "/president" },
    { label: "Notre Programme", href: "/programme" },
  ],
  ressources: [
    { label: "Actualités", href: "/actualites" },
    { label: "Agenda", href: "/agenda" },
    { label: "Galerie", href: "/galerie" },
    { label: "Adhésion", href: "/adhesion" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Statuts du parti", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1628", color: "#e2e8f0" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="images/logo_adere.png" alt="ADERE" className="h-48 w-auto object-contain" />
              <div>
                <div
                  className="text-base leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#F4B400" }}
                >
                  ADERE
                </div>
                <div className="text-xs" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
                  Alliance Démocratique et Républicaine
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
              Ensemble, bâtissons un Gabon plus juste, plus prospère et plus unie. L'ADERE s'engage pour chaque citoyen.
            </p>
            {/* Social media */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0E8A43")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)")}
                >
                  <Icon size={16} color="white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#F4B400" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4
              className="text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#F4B400" }}
            >
              Ressources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.ressources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm mb-5 uppercase tracking-wider"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#F4B400" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} style={{ color: "#0E8A43", marginTop: 2, flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
                  SBG, Libreville<br />Gabon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} style={{ color: "#0E8A43", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
                  +225 07 00 00 00 00
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} style={{ color: "#0E8A43", flexShrink: 0 }} />
                <span className="text-sm" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>
                  contact@adere-ga.org
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} ADERE — Alliance Démocratique et Républicaine. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
