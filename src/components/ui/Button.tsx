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
    "inline-flex items-center justify-center font-bold rounded-[3px] transition-[transform,filter,background-color,color] duration-200 hover:-translate-y-px";

  const variants = {
    primary: "bg-forest text-white hover:brightness-110",
    secondary: "bg-gold text-[#23271d] hover:brightness-105",
    outline:
      "bg-transparent border-[1.5px] border-forest text-forest hover:bg-forest hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
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
