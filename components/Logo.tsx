interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: 20, text: "text-lg" },
    md: { icon: 26, text: "text-2xl" },
    lg: { icon: 36, text: "text-4xl" },
  };

  const s = sizes[size];

  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2ECC71] rounded-lg ${className}`}
      aria-label="Colin Co. — Página inicial"
    >
      {/* Icon: C arc with ascending line */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        {/* C arc */}
        <path
          d="M20 7C17.5 4.5 13.5 3 10 4.5C5.5 6.5 3.5 11 4.5 15.5C5.5 20 10 23 15 22.5C17.5 22.2 19.5 21 21 19"
          stroke="#2ECC71"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Ascending line from top of C */}
        <line
          x1="20"
          y1="7"
          x2="24"
          y2="2"
          stroke="#2ECC71"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Arrow tip */}
        <polyline
          points="20,2 24,2 24,6"
          stroke="#2ECC71"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Wordmark */}
      <span
        className={`${s.text} font-syne font-extrabold leading-none tracking-tight`}
        style={{ fontFamily: "var(--font-syne)" }}
      >
        <span style={{ color: "#F2FAF5" }}>Colin</span>
        <span style={{ color: "#2ECC71" }}>Co.</span>
      </span>
    </a>
  );
}
