import { MessageCircle } from "lucide-react";

export function FloatingChatButton() {
  return (
    <button
      type="button"
      aria-label="Chat with JobVerse AI"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full gradient-primary text-white shadow-glow transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-success ring-2 ring-background" />
    </button>
  );
}
