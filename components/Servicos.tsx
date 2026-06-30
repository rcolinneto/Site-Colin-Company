"use client";

import { useRef, useEffect } from "react";

const services = [
  {
    id: "organico",
    featured: true,
    badge: "Nossa Especialidade",
    badgeBg: "rgba(46,204,113,0.12)",
    badgeColor: "#2ECC71",
    badgeBorder: "rgba(46,204,113,0.3)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="#2ECC71" strokeWidth="1.5" fill="none"/>
        <path d="M12 6v6l4 2" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14c1.5 2 4 3 6 2.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Tráfego Orgânico",
    description:
      "Crescimento real e sustentável através de conteúdo estratégico, SEO e presença social. O resultado que não para quando você para de pagar.",
    features: [
      "SEO técnico e de conteúdo",
      "Estratégia para Instagram, YouTube e TikTok",
      "Calendário editorial com Método Raiz",
      "Análise de concorrência e oportunidades",
      "Relatórios mensais de crescimento",
    ],
    accent: "#2ECC71",
    cardStyle: {
      background: "rgba(46,204,113,0.04)",
      border: "1px solid rgba(46,204,113,0.3)",
    },
  },
  {
    id: "conteudo",
    featured: false,
    badge: "Incluso",
    badgeBg: "rgba(255,255,255,0.06)",
    badgeColor: "#6B7D74",
    badgeBorder: "rgba(212,230,218,0.2)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#22A05A" strokeWidth="1.5"/>
        <path d="M7 8h10M7 12h7M7 16h5" stroke="#22A05A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Gestão de Conteúdo",
    description:
      "Produção, edição e publicação de conteúdo multiplataforma. Você foca no seu negócio — a gente cuida da sua presença digital.",
    features: [
      "Criação de copy e roteiros",
      "Edição de vídeo para Reels e Shorts",
      "Design de posts e stories",
      "Agendamento e publicação",
      "Gestão de comentários e DMs",
    ],
    accent: "#22A05A",
    cardStyle: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(212,230,218,0.12)",
    },
  },
  {
    id: "pago",
    featured: false,
    badge: "Complementar",
    badgeBg: "rgba(255,255,255,0.06)",
    badgeColor: "#6B7D74",
    badgeBorder: "rgba(212,230,218,0.2)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#1A6B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Tráfego Pago",
    description:
      "Utilizado como acelerador estratégico, nunca como substituto do orgânico. Meta Ads e Google Ads para amplificar o que já funciona.",
    features: [
      "Meta Ads (Instagram e Facebook)",
      "Google Ads (Search e Display)",
      "Remarketing para audiências quentes",
      "Testes A/B de criativos",
      "Relatórios de ROAS e CPA",
    ],
    accent: "#1A6B3C",
    cardStyle: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(212,230,218,0.12)",
    },
  },
];

export default function Servicos() {
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
      id="servicos"
      className="py-24 md:py-36"
      style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
      aria-labelledby="servicos-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="animate-on-scroll mb-4">
            <span
              className="tag"
              style={{
                color: "#2ECC71",
                borderColor: "rgba(46,204,113,0.3)",
                backgroundColor: "rgba(46,204,113,0.08)",
              }}
            >
              O que fazemos
            </span>
          </div>
          <h2
            id="servicos-headline"
            className="heading-lg animate-on-scroll"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#F2FAF5",
              marginBottom: "1rem",
            }}
          >
            Serviços que{" "}
            <span style={{ color: "#2ECC71" }}>constroem marcas</span>
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
            Não vendemos pacotes. Vendemos resultado. Cada serviço é pensado
            para trabalhar em conjunto — com o orgânico sempre no centro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <article
              key={service.id}
              className="animate-on-scroll rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                ...service.cardStyle,
                transitionDelay: `${i * 100}ms`,
              }}
              aria-labelledby={`service-${service.id}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.accent}15` }}
                >
                  {service.icon}
                </div>
                <span
                  className="tag text-xs"
                  style={{
                    color: service.badgeColor,
                    borderColor: service.badgeBorder,
                    backgroundColor: service.badgeBg,
                  }}
                >
                  {service.badge}
                </span>
              </div>

              <h3
                id={`service-${service.id}`}
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  color: "#F2FAF5",
                  marginBottom: "0.75rem",
                  lineHeight: 1.15,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#6B7D74",
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                  fontWeight: 300,
                  marginBottom: "1.5rem",
                  flexGrow: 1,
                }}
              >
                {service.description}
              </p>

              <ul className="flex flex-col gap-2.5" role="list">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5"
                    style={{ color: "#6B7D74", fontSize: "0.825rem" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke={service.accent}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {service.featured && (
                <div
                  className="mt-6 pt-6"
                  style={{ borderTop: "1px solid rgba(46,204,113,0.15)" }}
                >
                  <a
                    href="https://wa.me/5547997398936?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Colin%20Co.%20Gostaria%20de%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20marca%20a%20crescer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Começar agora
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
