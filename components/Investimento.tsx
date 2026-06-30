"use client";

import { useRef, useEffect } from "react";

const includes = [
  "Estratégia mensal com Método Raiz",
  "Produção de conteúdo (copy + design + vídeo)",
  "SEO técnico e de conteúdo",
  "Gestão de Instagram, YouTube e/ou TikTok",
  "Calendário editorial automatizado",
  "Publicação nos melhores horários",
  "Dashboard de métricas em tempo real",
  "Relatório mensal detalhado",
  "Reunião de estratégia mensal (1h)",
  "Canal direto via WhatsApp (dias úteis)",
];

export default function Investimento() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = el.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="investimento"
      className="py-12 md:py-36"
      style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
      aria-labelledby="investimento-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-16 text-center mx-auto">
          <div className="animate-on-scroll mb-4">
            <span
              className="tag"
              style={{
                color: "#2ECC71",
                borderColor: "rgba(46,204,113,0.3)",
                backgroundColor: "rgba(46,204,113,0.08)",
              }}
            >
              Investimento
            </span>
          </div>
          <h2
            id="investimento-headline"
            className="heading-lg animate-on-scroll"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#F2FAF5",
              marginBottom: "1rem",
            }}
          >
            Um preço justo para um{" "}
            <span style={{ color: "#2ECC71" }}>resultado real</span>
          </h2>
          <p
            className="animate-on-scroll"
            style={{
              color: "#6B7D74",
              fontSize: "1.1rem",
              lineHeight: "1.7",
              fontWeight: 300,
            }}
          >
            Sem contratos longos de início. Sem taxa de setup. Sem surpresas na fatura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Main plan */}
          <div
            className="animate-on-scroll rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: "rgba(46,204,113,0.04)",
              border: "1px solid rgba(46,204,113,0.3)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              aria-hidden="true"
              style={{
                background: "linear-gradient(90deg, transparent, #2ECC71, transparent)",
              }}
            />

            <div className="mb-8">
              <p
                style={{
                  color: "#6B7D74",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                }}
              >
                Plano Colin Co.
              </p>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(1.8rem, 5vw, 3rem)",
                    color: "#F2FAF5",
                    lineHeight: 1.1,
                    display: "block",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                >
                  Sob consulta
                </span>
              </div>
              <p style={{ color: "#6B7D74", fontSize: "0.8rem", marginTop: "6px" }}>
                Valor personalizado conforme escopo · Sem taxa de setup
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8" role="list">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5"
                  style={{ color: "#6B7D74", fontSize: "0.825rem" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="#2ECC71"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5547997398936?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Colin%20Co.%20Gostaria%20de%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20marca%20a%20crescer."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
              style={{ fontSize: "0.95rem", padding: "14px" }}
            >
              Quero saber o valor
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Launch bonus */}
          <div
            className="animate-on-scroll rounded-2xl p-8 flex flex-col"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(212,230,218,0.12)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(46,204,113,0.12)" }}
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L11 7h5.5L12 10.2l1.9 5.8L9 13l-4.9 3 1.9-5.8L1.5 7H7z" stroke="#2ECC71" strokeWidth="1.3" strokeLinejoin="round"/>
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
                  Bônus de Lançamento
                </p>
                <p style={{ color: "#6B7D74", fontSize: "0.75rem" }}>
                  Apenas para os primeiros clientes
                </p>
              </div>
            </div>

            <div
              className="rounded-xl p-5 mb-6"
              style={{ backgroundColor: "rgba(46,204,113,0.06)", border: "1px solid rgba(46,204,113,0.2)" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  color: "#2ECC71",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                }}
              >
                Tráfego pago grátis nos primeiros 3 meses
              </p>
              <p style={{ color: "#6B7D74", fontSize: "0.8rem", lineHeight: "1.5" }}>
                A verba de mídia é definida por você, com orientação estratégica da nossa equipe.
                A gestão das campanhas vem de graça.
              </p>
            </div>

            <div className="flex flex-col gap-4 flex-grow">
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(46,204,113,0.1)" }}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l2.5 2.5L10 4" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{ color: "#6B7D74", fontSize: "0.85rem", lineHeight: "1.6" }}>
                  Você define a verba mensal de mídia (R$ 500, R$ 1.000, R$ 2.000 — o que fizer sentido para você)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(46,204,113,0.1)" }}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l2.5 2.5L10 4" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{ color: "#6B7D74", fontSize: "0.85rem", lineHeight: "1.6" }}>
                  Nossa equipe cria os anúncios, configura as campanhas e otimiza — sem cobrar nada extra
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(46,204,113,0.1)" }}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l2.5 2.5L10 4" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p style={{ color: "#6B7D74", fontSize: "0.85rem", lineHeight: "1.6" }}>
                  Do 4º mês em diante, você decide se continua com tráfego pago — e como
                </p>
              </div>
            </div>

            <div
              className="mt-6 pt-6 text-center"
              style={{ borderTop: "1px solid rgba(212,230,218,0.12)" }}
            >
              <p style={{ color: "#6B7D74", fontSize: "0.78rem" }}>
                * Bônus sujeito à disponibilidade. Válido para contratos firmados nos primeiros 30 dias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
