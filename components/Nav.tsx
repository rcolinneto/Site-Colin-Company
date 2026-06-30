"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = [
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E1410]/95 backdrop-blur-md border-b border-[#D4E6DA]/10"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        <Logo size="sm" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#6B7D74] hover:text-[#F2FAF5] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ECC71] rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5547997398936?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Colin%20Co.%20Gostaria%20de%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20marca%20a%20crescer."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary text-sm"
          aria-label="Falar com a gente pelo WhatsApp"
        >
          Falar com a gente
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#6B7D74] hover:text-[#F2FAF5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ECC71] rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-72 border-t border-[#D4E6DA]/10" : "max-h-0"
        } bg-[#0E1410]/98 backdrop-blur-md`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-6 py-4 flex flex-col gap-4" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm font-medium text-[#6B7D74] hover:text-[#F2FAF5] transition-colors py-1"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="https://wa.me/5547997398936?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Colin%20Co.%20Gostaria%20de%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20marca%20a%20crescer."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
              onClick={handleLinkClick}
            >
              Falar com a gente
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
