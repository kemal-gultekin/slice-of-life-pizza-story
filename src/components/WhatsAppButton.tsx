import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { buildWhatsAppUrl, greetingMessage } from "@/utils/whatsapp";

type Props = { message?: string; children: ReactNode; variant?: "primary" | "ghost" | "olive"; className?: string; icon?: boolean };

export function WhatsAppButton({ message = greetingMessage, children, variant = "ghost", className = "", icon = true }: Props) {
  const url = buildWhatsAppUrl(message);
  const cls = `btn btn-${variant} ${className}`;
  if (!url) {
    return (
      <span className={cls} aria-disabled="true" title="WhatsApp number not configured yet">
        {icon && <MessageCircle className="size-4" aria-hidden />} {children}
      </span>
    );
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
      {icon && <MessageCircle className="size-4" aria-hidden />} {children}
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
