export default function Rakhi({ className, spin = true }) {
  return (
    <svg
      className={className}
      style={spin ? { animation: "rakhi-spin 14s linear infinite" } : undefined}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rakhiGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFE7A0" />
          <stop offset="100%" stopColor="#F7931E" />
        </radialGradient>
      </defs>
      {/* threads */}
      <g stroke="#FFE7A0" strokeWidth="2" opacity="0.85">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 60 + Math.cos(angle) * 26;
          const y1 = 60 + Math.sin(angle) * 26;
          const x2 = 60 + Math.cos(angle) * 46;
          const y2 = 60 + Math.sin(angle) * 46;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      {/* beads */}
      <g fill="#E8546B">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = 60 + Math.cos(angle) * 38;
          const y = 60 + Math.sin(angle) * 38;
          return <circle key={i} cx={x} cy={y} r="4" />;
        })}
      </g>
      {/* center medallion */}
      <circle cx="60" cy="60" r="24" fill="url(#rakhiGlow)" stroke="#FFE7A0" strokeWidth="3" />
      <circle cx="60" cy="60" r="10" fill="#E8546B" />
    </svg>
  );
}
