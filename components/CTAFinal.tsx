"use client";

import { useRef, useEffect } from "react";

export default function CTAFinal() {
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
      { threshold: 0.2 }
    );

    const elements = el.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contato"
      className="py-12 md:py-36 relative overflow-hidden"
      style={{ backgroundColor: "#1A6B3C" }}
      aria-labelledby="cta-headline"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial lights */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(46,204,113,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(14,20,16,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="animate-on-scroll mb-6">
          <span
            className="tag"
            style={{
              color: "#0E1410",
              borderColor: "rgba(14,20,16,0.2)",
              backgroundColor: "rgba(14,20,16,0.15)",
            }}
          >
            Próximo passo
          </span>
        </div>

        <h2
          id="cta-headline"
          className="heading-xl animate-on-scroll"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            color: "#F2FAF5",
            marginBottom: "1.5rem",
          }}
        >
          Sua marca pode ser a que{" "}
          <span style={{ color: "#2ECC71" }}>todos falam</span>
          <br />— ou a que ninguém conhece.
        </h2>

        <p
          className="animate-on-scroll"
          style={{
            color: "rgba(242,250,245,0.75)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: "1.7",
            fontWeight: 300,
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
          }}
        >
          A escolha é sua. Mas se você quer crescer de forma sólida e construir
          algo que dure — a Colin Co. está pronta para ser a sua parceira.
        </p>

        <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5547997398936?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Colin%20Co.%20Gostaria%20de%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20marca%20a%20crescer."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            style={{
              backgroundColor: "#2ECC71",
              color: "#0E1410",
              fontSize: "1.05rem",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#F2FAF5";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#2ECC71";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
            aria-label="Falar com a Colin Co. pelo WhatsApp"
          >
            {/* WhatsApp icon */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M11 1.5C5.753 1.5 1.5 5.753 1.5 11c0 1.664.447 3.22 1.224 4.567L1.5 20.5l5.072-1.208A9.45 9.45 0 0011 20.5c5.247 0 9.5-4.253 9.5-9.5S16.247 1.5 11 1.5z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M7.5 9.5c0-.553.447-1 1-1h.5c.368 0 .7.208.86.535l.64 1.28a.5.5 0 01-.084.583l-.5.5a5.002 5.002 0 002.686 2.686l.5-.5a.5.5 0 01.583-.084l1.28.64c.327.16.535.492.535.86v.5c0 .553-.447 1-1 1C10.07 16.5 5.5 11.93 5.5 7.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            Falar com a gente no WhatsApp
          </a>
        </div>

        <p
          className="animate-on-scroll mt-6"
          style={{ color: "rgba(242,250,245,0.45)", fontSize: "0.8rem" }}
        >
          Respondemos em até 2 horas nos dias úteis.
        </p>
      </div>
    </section>
  );
}
