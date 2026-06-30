"use client";

import { useRef, useEffect } from "react";

const steps = [
  {
    id: 1,
    type: "auto",
    label: "Onboarding",
    description: "Formulário inteligente coleta dados da sua marca, público-alvo, concorrentes e objetivos. Análise automática de SEO e presença digital atual.",
  },
  {
    id: 2,
    type: "human",
    label: "Estratégia & Criação",
    description: "Nossa equipe mergulha nos dados, define os pilares do Método Raiz para o seu negócio e cria os primeiros conteúdos. Aqui mora a diferença.",
  },
  {
    id: 3,
    type: "auto",
    label: "Calendário Editorial",
    description: "Sistema gera o calendário do mês com todas as publicações organizadas por pilar (Hero/Hub/Help), plataforma e formato.",
  },
  {
    id: 4,
    type: "human",
    label: "Revisão & Aprovação",
    description: "Você aprova cada conteúdo antes de ir ao ar. Ajustes ilimitados até estar 100% alinhado com sua voz de marca.",
  },
  {
    id: 5,
    type: "auto",
    label: "Publicação",
    description: "Conteúdos publicados automaticamente nos horários de maior engajamento para cada plataforma e perfil de audiência.",
  },
  {
    id: 6,
    type: "auto",
    label: "Relatórios",
    description: "Dashboard em tempo real + relatório mensal com métricas de alcance, engajamento, leads gerados e posicionamento SEO.",
  },
];

export default function ComoFunciona() {
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
      id="como-funciona"
      className="py-12 md:py-36"
      aria-labelledby="como-funciona-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-16">
          <div className="animate-on-scroll mb-4">
            <span
              className="tag"
              style={{
                color: "#2ECC71",
                borderColor: "rgba(46,204,113,0.3)",
                backgroundColor: "rgba(46,204,113,0.08)",
              }}
            >
              O processo
            </span>
          </div>
          <h2
            id="como-funciona-headline"
            className="heading-lg animate-on-scroll"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#F2FAF5",
              marginBottom: "1rem",
            }}
          >
            Como{" "}
            <span style={{ color: "#2ECC71" }}>funciona</span>
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
            Automação inteligente para eliminar o trabalho repetitivo. Mãos humanas
            onde a criatividade e a estratégia fazem a diferença real.
          </p>
        </div>

        {/* Legend */}
        <div className="animate-on-scroll flex items-center gap-6 mb-10" aria-label="Legenda do processo">
          <div className="flex items-center gap-2">
            <span
              style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                padding: "5px 12px", borderRadius: "999px", lineHeight: 1,
                fontSize: "0.75rem", fontWeight: 500, whiteSpace: "nowrap",
                backgroundColor: "rgba(46,204,113,0.1)", color: "#2ECC71",
                border: "1px solid rgba(46,204,113,0.25)",
              }}
            >
              🤖 Auto
            </span>
            <span style={{ color: "#6B7D74", fontSize: "0.8rem" }}>Automatizado</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                padding: "5px 12px", borderRadius: "999px", lineHeight: 1,
                fontSize: "0.75rem", fontWeight: 500, whiteSpace: "nowrap",
                backgroundColor: "rgba(212,230,218,0.08)", color: "#F2FAF5",
                border: "1px solid rgba(212,230,218,0.25)",
              }}
            >
              🧠 Humano
            </span>
            <span style={{ color: "#6B7D74", fontSize: "0.8rem" }}>Equipe Colin Co.</span>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line - desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            aria-hidden="true"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(212,230,218,0.15) 10%, rgba(212,230,218,0.15) 90%, transparent)" }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const isAuto = step.type === "auto";
              const isEven = i % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`animate-on-scroll grid md:grid-cols-2 gap-6 items-center`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Content — alternates sides on desktop */}
                  <div
                    className={`card-dark p-6 ${isEven ? "md:col-start-1" : "md:col-start-2 md:row-start-1"}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "5px",
                          padding: "5px 12px", borderRadius: "999px", lineHeight: 1,
                          fontSize: "0.75rem", fontWeight: 500, whiteSpace: "nowrap",
                          ...(isAuto
                            ? { backgroundColor: "rgba(46,204,113,0.1)", color: "#2ECC71", border: "1px solid rgba(46,204,113,0.25)" }
                            : { backgroundColor: "rgba(212,230,218,0.08)", color: "#F2FAF5", border: "1px solid rgba(212,230,218,0.25)" }
                          ),
                        }}
                      >
                        {isAuto ? "🤖 Auto" : "🧠 Humano"}
                      </span>
                      <span style={{ color: "#6B7D74", fontSize: "0.75rem" }}>Etapa {step.id}</span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        color: "#F2FAF5",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {step.label}
                    </h3>
                    <p style={{ color: "#6B7D74", fontSize: "0.875rem", lineHeight: "1.6", fontWeight: 300 }}>
                      {step.description}
                    </p>
                  </div>

                  {/* Center number — desktop */}
                  <div
                    className={`hidden md:flex items-center justify-center ${isEven ? "md:col-start-2 md:row-start-1" : "md:col-start-1 md:row-start-1"}`}
                    aria-hidden="true"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold relative z-10"
                      style={{
                        backgroundColor: "#0E1410",
                        border: isAuto ? "2px solid rgba(46,204,113,0.4)" : "2px solid rgba(212,230,218,0.2)",
                        color: isAuto ? "#2ECC71" : "#F2FAF5",
                        fontFamily: "var(--font-syne)",
                      }}
                    >
                      {step.id}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Landing Page optional step */}
        <div
          className="animate-on-scroll mt-8 px-5 py-4 rounded-xl flex items-start gap-3"
          style={{ backgroundColor: "rgba(234,179,8,0.05)", border: "1px dashed rgba(234,179,8,0.2)" }}
        >
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              padding: "3px 10px", borderRadius: "999px", lineHeight: 1,
              fontSize: "0.7rem", fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0, marginTop: "2px",
              backgroundColor: "rgba(212,230,218,0.08)", color: "#F2FAF5",
              border: "1px solid rgba(212,230,218,0.25)",
            }}
          >
            🧠 Humano
          </span>
          <p style={{ color: "#6B7D74", fontSize: "0.85rem", lineHeight: "1.6" }}>
            <span style={{ color: "#F2FAF5", fontWeight: 500 }}>Etapa opcional: Landing Page.</span>{" "}
            Quando uma campanha (orgânica ou paga) precisa de uma página de conversão dedicada, nossa equipe cria e publica a landing page integrada ao calendário editorial — sem sair do fluxo do Método Raiz.
          </p>
        </div>

        {/* Bottom note */}
        <div
          className="animate-on-scroll mt-6 p-6 rounded-2xl"
          style={{ backgroundColor: "rgba(26,107,60,0.06)", border: "1px solid rgba(26,107,60,0.2)" }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(46,204,113,0.12)" }}
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1l2 5.5H17l-4.5 3.3 1.7 5.4L9 12.2l-5.2 3 1.7-5.4L1 6.5h6z" stroke="#2ECC71" strokeWidth="1.3" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#F2FAF5",
                  marginBottom: "2px",
                }}
              >
                Você nunca fica no escuro
              </p>
              <p style={{ color: "#6B7D74", fontSize: "0.85rem", lineHeight: "1.6" }}>
                Acesso ao dashboard em tempo real, reunião de estratégia mensal e canal direto com sua dupla (estrategista + criativo) via WhatsApp nos dias úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
