# Colin Co. — Site Institucional

Site institucional da Colin Co., agência de marketing digital especializada em tráfego orgânico.

---

## Stack

- **[Next.js 14](https://nextjs.org/)** — App Router, SSG (Static Site Generation)
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática em todo o projeto
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first CSS, configurado com design tokens customizados
- **[next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** — carregamento otimizado de fontes via Next.js (zero layout shift)

## Fontes

| Fonte | Uso | Pesos |
|-------|-----|-------|
| **Syne** | Headlines, logo, números de destaque | 400, 500, 600, 700, 800 |
| **Inter** | Corpo de texto, labels, botões | 300, 400, 500, 600 |

## Paleta de Cores

| Variável | Hex | Uso |
|----------|-----|-----|
| `--green` | `#1A6B3C` | Cor principal da marca |
| `--green-light` | `#22A05A` | Hover states, acentos secundários |
| `--green-glow` | `#2ECC71` | CTAs, destaques, links ativos |
| `--charcoal` | `#0E1410` | Fundo escuro (nunca preto puro) |
| `--off-white` | `#F2FAF5` | Texto principal, fundos claros |
| `--muted` | `#6B7D74` | Texto secundário, subtítulos |
| `--border` | `#D4E6DA` | Bordas, divisores |

---

## Estrutura do Projeto

```
colin-co/
├── app/
│   ├── globals.css        # Design system: CSS variables, classes base
│   ├── layout.tsx         # Root layout: fontes, metadata SEO
│   └── page.tsx           # Página principal (single page)
├── components/
│   ├── Nav.tsx            # Navbar fixa com scroll effect + menu mobile
│   ├── Logo.tsx           # Logo SVG + wordmark Colin Co.
│   ├── Hero.tsx           # Seção hero com badge, headline e card Método Raiz
│   ├── MetodoRaiz.tsx     # Seção com os 3 pilares Hero / Hub / Help
│   ├── Servicos.tsx       # Cards de serviços (Orgânico, Conteúdo, Pago)
│   ├── ComoFunciona.tsx   # Fluxo com tags 🤖 Auto / 🧠 Humano
│   ├── Investimento.tsx   # Card de preço + card de bônus de lançamento
│   ├── CTAFinal.tsx       # Seção CTA verde com botão WhatsApp
│   └── Footer.tsx         # Rodapé com logo e links
├── hooks/
│   └── useScrollAnimation.ts  # Hook IntersectionObserver para animações
├── tailwind.config.ts     # Tokens de cor, fonte e keyframes customizados
└── next.config.mjs
```

## Seções da Página

1. **Nav** — fixa, com efeito glassmorphism ao scroll e menu hambúrguer no mobile
2. **Hero** — headline principal, subheadline, CTAs e card lateral do Método Raiz
3. **Método Raiz** — os 3 pilares (Hero / Hub / Help) em cards detalhados
4. **Serviços** — Tráfego Orgânico (destaque), Gestão de Conteúdo e Tráfego Pago
5. **Como Funciona** — fluxo de trabalho com automação e etapas humanas
6. **Investimento** — card de preço sob consulta + bônus de lançamento
7. **CTA Final** — fundo verde com headline forte e botão WhatsApp
8. **Footer** — logo, copyright e links de navegação

---

## Instalação e Uso

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar build de produção
npm start
```

O servidor de desenvolvimento sobe em `http://localhost:3000`.

## Decisões Técnicas

- **Single page com scroll suave** — todas as seções na `page.tsx`, navegação por âncoras (`#metodo`, `#servicos`, etc.)
- **Animações por IntersectionObserver** — elementos entram com fade + slide-up ao aparecer na viewport, sem dependência de bibliotecas externas
- **`"use client"` seletivo** — apenas componentes com hooks ou event handlers são client components; o resto renderiza no servidor
- **Fontes via `next/font`** — download em build time, sem requisição extra do browser, eliminando FOUT
- **SEO básico** — `<title>`, `<meta description>`, Open Graph e robots configurados no `layout.tsx`
- **Acessibilidade** — roles ARIA (`banner`, `main`, `contentinfo`), `aria-label` em todos os botões de ícone, navegação por teclado com `focus-visible`
