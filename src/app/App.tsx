import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { PartiPage } from "./components/pages/PartiPage";
import { PresidentPage } from "./components/pages/PresidentPage";
import { ProgrammePage } from "./components/pages/ProgrammePage";
import { ActualitesPage } from "./components/pages/ActualitesPage";
import { AgendaPage } from "./components/pages/AgendaPage";
import { GaleriePage } from "./components/pages/GaleriePage";
import { AdhesionPage } from "./components/pages/AdhesionPage";
import { ContactPage } from "./components/pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/parti" element={<PartiPage />} />
            <Route path="/president" element={<PresidentPage />} />
            <Route path="/programme" element={<ProgrammePage />} />
            <Route path="/actualites" element={<ActualitesPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/galerie" element={<GaleriePage />} />
            <Route path="/adhesion" element={<AdhesionPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
