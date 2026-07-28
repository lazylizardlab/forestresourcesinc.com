import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * The site's buttons sit on a hard offset shadow rather than a blur — a
 * printed-block look — and lift on hover so the shadow reads as depth.
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-display font-semibold uppercase tracking-[0.07em] transition-[transform,background-color,color] duration-150 hover:-translate-y-0.5";

  const variants = {
    primary:
      "bg-rust text-cream shadow-[0_4px_0_var(--color-rust-deep)] hover:bg-rust-hi",
    secondary:
      "bg-gold text-ink shadow-[0_4px_0_var(--color-gold-deep)] hover:bg-gold-hi",
    outline:
      "border-[2.5px] border-gold text-gold hover:bg-gold hover:text-ink",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-7 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
