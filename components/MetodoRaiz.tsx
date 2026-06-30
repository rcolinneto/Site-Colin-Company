"use client";

import { useRef, useEffect } from "react";

const pillars = [
  {
    id: "hero",
    emoji: "⚡",
    label: "Hero",
    subtitle: "O Gancho",
    color: "#2ECC71",
    bgColor: "rgba(46,204,113,0.08)",
    borderColor: "rgba(46,204,113,0.25)",
    headline: "Conteúdo de alto impacto que para o scroll",
    description:
      "São os conteúdos que viralizam, geram alcance massivo e colocam sua marca no mapa. Vídeos de tendência, posts inesperados, formatos que param qualquer pessoa no feed — mesmo quem nunca ouviu falar de você.",
    bullets: [
      "Reels e Shorts otimizados para viralização",
      "Hooks irresistíveis nos primeiros 3 segundos",
      "Conteúdo que faz novas pessoas te descobrirem",
    ],
  },
  {
    id: "hub",
    emoji: "🔗",
    label: "Hub",
    subtitle: "A Conexão",
    color: "#22A05A",
    bgColor: "rgba(34,160,90,0.08)",
    borderColor: "rgba(34,160,90,0.25)",
    headline: "Conteúdo recorrente que mantém engajamento",
    description:
      "São os conteúdos que fazem sua audiência voltar toda semana. Séries, bastidores, rotinas, updates — conteúdo que cria hábito e faz as pessoas sentirem que fazem parte da sua história.",
    bullets: [
      "Séries temáticas que criam audiência fiel",
      "Bastidores que humanizam a marca",
      "Calendário editorial previsível e consistente",
    ],
  },
  {
    id: "help",
    emoji: "🎓",
    label: "Help",
    subtitle: "A Confiança",
    color: "#1A6B3C",
    bgColor: "rgba(26,107,60,0.08)",
    borderColor: "rgba(26,107,60,0.35)",
    headline: "Conteúdo educativo que converte",
    description:
      "São os conteúdos que respondem as dúvidas do seu cliente ideal antes mesmo dele perguntar. Tutoriais, comparativos, FAQs — conteúdo que posiciona sua marca como a resposta óbvia para o problema dele.",
    bullets: [
      "Artigos SEO que ranqueiam no Google",
      "Vídeos tutoriais que constroem autoridade",
      "Conteúdo que elimina objeções de compra",
    ],
  },
];

export default function MetodoRaiz() {
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = el.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="metodo"
      className="py-24 md:py-36"
      aria-labelledby="metodo-headline"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="animate-on-scroll mb-4">
            <span
              className="tag"
              style={{
                color: "#2ECC71",
                borderColor: "rgba(46,204,113,0.3)",
                backgroundColor: "rgba(46,204,113,0.08)",
              }}
            >
              Nosso método exclusivo
            </span>
          </div>
          <h2
            id="metodo-headline"
            className="heading-lg animate-on-scroll"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#F2FAF5",
              marginBottom: "1rem",
            }}
          >
            O Método{" "}
            <span style={{ color: "#2ECC71" }}>Raiz</span>
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
            Desenvolvido a partir dos princípios Hero/Hub/Help do Google, adaptado
            para a realidade das marcas brasileiras que querem crescimento consistente
            — não apenas picos de visibilidade.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.id}
              className="card-dark p-8 animate-on-scroll flex flex-col"
              style={{
                transitionDelay: `${i * 100}ms`,
                borderColor: pillar.borderColor,
              }}
              aria-labelledby={`pillar-${pillar.id}`}
            >
              {/* Icon + label */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: pillar.bgColor }}
                  aria-hidden="true"
                >
                  {pillar.emoji}
                </div>
                <span
                  className="tag text-xs"
                  style={{
                    color: pillar.color,
                    borderColor: pillar.borderColor,
                    backgroundColor: pillar.bgColor,
                  }}
                >
                  {pillar.subtitle}
                </span>
              </div>

              <h3
                id={`pillar-${pillar.id}`}
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: pillar.color,
                  lineHeight: 1.1,
                  marginBottom: "0.75rem",
                }}
              >
                {pillar.label}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#F2FAF5",
                  marginBottom: "1rem",
                  lineHeight: 1.3,
                }}
              >
                {pillar.headline}
              </p>

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
                {pillar.description}
              </p>

              <ul className="flex flex-col gap-2" role="list">
                {pillar.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2"
                    style={{ color: "#6B7D74", fontSize: "0.8rem" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke={pillar.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="animate-on-scroll mt-10 p-6 rounded-2xl text-center"
          style={{ backgroundColor: "rgba(26,107,60,0.08)", border: "1px solid rgba(26,107,60,0.25)" }}
        >
          <p style={{ color: "#6B7D74", fontSize: "0.9rem", lineHeight: "1.6" }}>
            <span style={{ color: "#2ECC71", fontWeight: 600 }}>A mágica acontece na combinação dos três pilares.</span>{" "}
            Marcas que publicam só Hero viralizam uma vez e somem. Só Help ficam invisíveis.
            O equilíbrio entre os três é o que cria audiências que compram.
          </p>
        </div>
      </div>
    </section>
  );
}
