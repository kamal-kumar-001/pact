export default function PactLogo({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 28c4.5-6 11.5-6 16 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="20" r="2.5" fill="currentColor" />
      <circle cx="30" cy="20" r="2.5" fill="currentColor" />
      <path
        d="M24 12v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
