"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(".animate-on-scroll");
    const timer = setTimeout(() => {
      items.forEach((item, i) => {
        setTimeout(() => item.classList.add("visible"), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,107,60,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,107,60,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(46,204,113,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
          {/* Left: headline + subheadline */}
          <div>
            <div className="animate-on-scroll mb-8">
              <span
                className="tag"
                style={{
                  color: "#2ECC71",
                  borderColor: "rgba(46,204,113,0.3)",
                  backgroundColor: "rgba(46,204,113,0.08)",
                }}
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ backgroundColor: "#2ECC71" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: "#2ECC71" }}
                  />
                </span>
                ATENDEMOS TODO O BRASIL
              </span>
            </div>

            <h1
              id="hero-headline"
              className="heading-xl animate-on-scroll"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                color: "#F2FAF5",
                marginBottom: "1.5rem",
              }}
            >
              A marca que domina<br />
              <span style={{ color: "#2ECC71" }}>o orgânico,</span><br />
              domina o mercado.
            </h1>

            <p
              className="animate-on-scroll"
              style={{
                color: "#6B7D74",
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                lineHeight: "1.7",
                maxWidth: "560px",
                fontWeight: 300,
                marginBottom: "2.5rem",
              }}
            >
              Enquanto a concorrência aposta tudo em anúncio, a Colin Co. constrói o que ninguém pode copiar.
            </p>

            <div className="animate-on-scroll flex flex-wrap gap-4">
              <a
                href="https://wa.me/5547997398936?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Colin%20Co.%20Gostaria%20de%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20marca%20a%20crescer."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "1rem", padding: "14px 28px" }}
              >
                Quero dominar o orgânico
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#metodo"
                className="btn-ghost"
                style={{ fontSize: "1rem", padding: "14px 28px" }}
              >
                Ver o método
              </a>
            </div>

            {/* Social proof */}
            <div
              className="animate-on-scroll flex items-center gap-6 mt-10 pt-10"
              style={{ borderTop: "1px solid rgba(212,230,218,0.12)" }}
            >
              {[
                { value: "3x", label: "mais alcance orgânico" },
                { value: "90d", label: "para resultados consistentes" },
                { value: "100%", label: "foco em crescimento real" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      color: "#2ECC71",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ color: "#6B7D74", fontSize: "0.75rem", marginTop: "4px" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Método Raiz card */}
          <div className="animate-on-scroll">
            <div
              className="card-dark p-8 relative"
              style={{ transition: "all 0.3s" }}
            >
              {/* Glow accent */}
              <div
                className="absolute -top-px left-8 right-8 h-px"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(46,204,113,0.6), transparent)",
                }}
              />

              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(46,204,113,0.12)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v4M7 9v4M1 7h4M9 7h4" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "1rem",
                      color: "#F2FAF5",
                    }}
                  >
                    Método Raiz
                  </p>
                  <p style={{ color: "#6B7D74", fontSize: "0.7rem" }}>
                    Hero · Hub · Help
                  </p>
                </div>
              </div>

              <p
                style={{
                  color: "#6B7D74",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                  fontWeight: 300,
                }}
              >
                Um sistema de conteúdo que atrai, engaja e converte — de forma
                previsível e escalável.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "⚡",
                    label: "Hero",
                    desc: "Para o scroll, gera alcance",
                    color: "#2ECC71",
                  },
                  {
                    icon: "🔗",
                    label: "Hub",
                    desc: "Mantém a audiência conectada",
                    color: "#22A05A",
                  },
                  {
                    icon: "🎓",
                    label: "Help",
                    desc: "Constrói autoridade e confia",
                    color: "#1A6B3C",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  >
                    <span style={{ fontSize: "1rem" }} aria-hidden="true">{item.icon}</span>
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          color: item.color,
                        }}
                      >
                        {item.label}
                      </span>
                      <p style={{ color: "#6B7D74", fontSize: "0.75rem" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#metodo"
                className="block mt-6 text-center text-sm font-medium transition-colors duration-200"
                style={{ color: "#2ECC71" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#22A05A")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#2ECC71")
                }
              >
                Conhecer o método completo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
