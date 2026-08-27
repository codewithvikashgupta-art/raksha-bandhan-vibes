export default function BrotherSisterScene({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="scene-title"
    >
      <title id="scene-title">
        Illustration of a sister tying a rakhi on her brother's wrist, with a decorated thali, diya and flowers
      </title>
      <defs>
        <radialGradient id="haloGrad" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#FFE7A0" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#F7B733" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F7B733" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A1526" />
          <stop offset="100%" stopColor="#5A0E1E" />
        </linearGradient>
        <linearGradient id="brotherKurta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D1A5B" />
          <stop offset="100%" stopColor="#241033" />
        </linearGradient>
        <linearGradient id="sisterSaree" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8546B" />
          <stop offset="100%" stopColor="#B23652" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF6E9" />
          <stop offset="60%" stopColor="#F7B733" />
          <stop offset="100%" stopColor="#F7931E" />
        </linearGradient>
      </defs>

      {/* glow halo */}
      <ellipse cx="320" cy="230" rx="300" ry="260" fill="url(#haloGrad)" />

      {/* decorative arch */}
      <path
        d="M120 500 V260 Q120 100 320 100 Q520 100 520 260 V500"
        fill="none"
        stroke="url(#archGrad)"
        strokeWidth="14"
        opacity="0.5"
      />
      <path
        d="M150 500 V270 Q150 130 320 130 Q490 130 490 270 V500"
        fill="none"
        stroke="#F7B733"
        strokeWidth="2"
        strokeDasharray="2 10"
        opacity="0.5"
      />

      {/* ground shadow */}
      <ellipse cx="320" cy="512" rx="190" ry="18" fill="#3A0910" opacity="0.5" />

      {/* ===== Sister (left) ===== */}
      <g transform="translate(190,190)">
        {/* braid */}
        <path d="M8 10 Q -6 70 6 130" stroke="#241033" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* head */}
        <circle cx="14" cy="4" r="30" fill="#F3C89A" />
        {/* hair */}
        <path d="M-16 -6 Q14 -42 44 -6 Q44 -20 14 -26 Q-16 -20 -16 -6 Z" fill="#241033" />
        {/* bindi + face hint */}
        <circle cx="14" cy="6" r="2" fill="#B23652" />
        {/* saree/body */}
        <path
          d="M-30 30 Q14 8 58 30 L66 210 Q14 232 -38 210 Z"
          fill="url(#sisterSaree)"
        />
        {/* saree pallu drape */}
        <path d="M-22 34 Q40 60 30 210" fill="none" stroke="#F7B733" strokeWidth="6" opacity="0.8" />
        {/* raised arm tying rakhi */}
        <path
          d="M52 46 Q108 40 132 66"
          stroke="#F3C89A"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        {/* bangles */}
        <circle cx="122" cy="60" r="6" fill="none" stroke="#F7B733" strokeWidth="2" />
        <circle cx="130" cy="66" r="6" fill="none" stroke="#F7B733" strokeWidth="2" />
      </g>

      {/* ===== Brother (right) ===== */}
      <g transform="translate(360,196)">
        {/* head */}
        <circle cx="30" cy="0" r="30" fill="#E8B084" />
        {/* hair */}
        <path d="M2 -10 Q30 -34 58 -10 Q54 -22 30 -24 Q6 -22 2 -10 Z" fill="#1B1023" />
        {/* kurta body */}
        <path
          d="M-6 26 Q30 6 66 26 L74 214 Q30 234 -14 214 Z"
          fill="url(#brotherKurta)"
        />
        <path d="M2 30 L58 30 L54 44 Q30 52 6 44 Z" fill="#F7B733" opacity="0.85" />
        {/* extended wrist arm toward sister */}
        <path
          d="M2 50 Q-56 46 -78 70"
          stroke="#E8B084"
          strokeWidth="17"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* ===== Rakhi thread on wrist (meeting point) ===== */}
      <g transform="translate(280,262)">
        <circle r="16" fill="#F7B733" stroke="#FFE7A0" strokeWidth="3" />
        <circle r="7" fill="#E8546B" />
        <g stroke="#FFE7A0" strokeWidth="2">
          <line x1="0" y1="-22" x2="0" y2="-30" />
          <line x1="0" y1="22" x2="0" y2="30" />
          <line x1="-22" y1="0" x2="-30" y2="0" />
          <line x1="22" y1="0" x2="30" y2="0" />
        </g>
      </g>

      {/* ===== Thali (decorative plate) at the base ===== */}
      <g transform="translate(320,432)">
        <ellipse cx="0" cy="18" rx="110" ry="26" fill="#F7931E" opacity="0.9" />
        <ellipse cx="0" cy="10" rx="96" ry="20" fill="#F7B733" />
        <ellipse cx="0" cy="10" rx="70" ry="13" fill="#FFE7A0" opacity="0.6" />

        {/* diya on thali */}
        <g transform="translate(-58,-6)">
          <path d="M-20 6 Q0 24 20 6 Q14 -4 0 -4 Q-14 -4 -20 6 Z" fill="#7A1526" />
          <ellipse cx="0" cy="-8" rx="7" ry="14" fill="url(#flameGrad)">
            <animate attributeName="ry" values="14;17;13;15;14" dur="1.6s" repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* rakhi threads coiled on thali */}
        <g transform="translate(10,-4)">
          <circle r="12" fill="none" stroke="#E8546B" strokeWidth="4" />
          <circle r="5" fill="#F7B733" />
        </g>

        {/* flowers */}
        <g transform="translate(58,-8)">
          <circle cx="-6" cy="0" r="6" fill="#FF8FA3" />
          <circle cx="6" cy="0" r="6" fill="#FF8FA3" />
          <circle cx="0" cy="-6" r="6" fill="#FF8FA3" />
          <circle cx="0" cy="6" r="6" fill="#FF8FA3" />
          <circle r="4" fill="#F7B733" />
        </g>

        {/* sweets */}
        <g transform="translate(88,4)">
          <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#F7931E" />
          <rect x="-8" y="-6" width="16" height="4" fill="#FFE7A0" opacity="0.7" />
        </g>
      </g>

      {/* floating decorative flowers around the arch */}
      <g opacity="0.85">
        <circle cx="90" cy="150" r="5" fill="#FF8FA3" />
        <circle cx="110" cy="130" r="4" fill="#F7B733" />
        <circle cx="540" cy="160" r="5" fill="#FF8FA3" />
        <circle cx="560" cy="140" r="4" fill="#F7B733" />
      </g>
    </svg>
  );
}
