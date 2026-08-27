export default function Diya({ className, lit = true, delay = 0 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 70"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`diyaLight-${delay}`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE7A0" stopOpacity={lit ? 0.9 : 0} />
          <stop offset="100%" stopColor="#F7931E" stopOpacity="0" />
        </radialGradient>
      </defs>
      {lit && <circle cx="30" cy="24" r="26" fill={`url(#diyaLight-${delay})`} />}
      {/* lamp body */}
      <path d="M6 40 Q30 62 54 40 Q46 30 30 30 Q14 30 6 40 Z" fill="#7A1526" stroke="#F7931E" strokeWidth="1.5" />
      <ellipse cx="30" cy="40" rx="9" ry="3.5" fill="#3A0910" />
      {lit && (
        <ellipse
          cx="30"
          cy="20"
          rx="5"
          ry="12"
          fill="#F7B733"
          style={{
            transformOrigin: "30px 30px",
            animation: `flicker 1.4s ease-in-out ${delay}s infinite`,
          }}
        />
      )}
    </svg>
  );
}
