import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref as never}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
      className={cn(
        "opacity-0",
        visible && "animate-fade-up opacity-100",
        className
      )}
    >
      {children}
    </Tag>
  );
}
