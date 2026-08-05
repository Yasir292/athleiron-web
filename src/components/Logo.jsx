export function Logo({ className = "h-8", showText = true }) {
  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-auto">
        <rect width="48" height="48" rx="10" fill="#ff4d00" />
        <path
          d="M12 34L21 16L24 22L27 16L36 34H31.5L28.5 28L25.5 34H22.5L19.5 28L16.5 34H12Z"
          fill="#0a0a0b"
        />
        <path d="M24 24L26 29H22L24 24Z" fill="white" />
      </svg>
      {showText && (
        <span className="text-xl font-black tracking-tight text-white">
          ATHLE<span className="text-flame-500">IRON</span>
        </span>
      )}
    </a>
  );
}
