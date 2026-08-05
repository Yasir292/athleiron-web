export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-flame-500 focus:ring-offset-2 focus:ring-offset-iron-950 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-flame-500 text-white hover:bg-flame-600",
    secondary: "bg-iron-800 text-white hover:bg-iron-700",
    outline:
      "border border-iron-600 bg-transparent text-white hover:border-flame-500 hover:text-flame-500",
    ghost: "bg-transparent text-iron-300 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
