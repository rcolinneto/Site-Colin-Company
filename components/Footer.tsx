"use client";

import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10"
      style={{ borderTop: "1px solid rgba(212,230,218,0.08)" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo size="sm" />

        <p style={{ color: "#6B7D74", fontSize: "0.8rem" }}>
          © {year} Colin Co. Todos os direitos reservados.
          <span className="hidden sm:inline"> · Joinville, SC</span>
        </p>

        <nav aria-label="Links do rodapé">
          <ul className="flex items-center gap-4" role="list">
            {[
              { label: "Método", href: "#metodo" },
              { label: "Serviços", href: "#servicos" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ECC71] rounded"
                  style={{ color: "#6B7D74" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#F2FAF5")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#6B7D74")
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
