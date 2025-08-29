"use client";
import { useToast } from "./ToastProvider";

export default function ShareRow({ title }: { title: string }) {
  const toast = useToast();
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        toast("Link compartilhado!", "success");
      } else {
        await navigator.clipboard.writeText(url);
        toast("Link copiado!", "success");
      }
    } catch {
      toast("Não foi possível compartilhar o link", "error");
    }
  };
  return (
    <div className="mt-4 flex items-center gap-2">
      <button onClick={share} className="px-3 py-1.5 rounded bg-[color:var(--brand-blue)] text-white text-sm">Compartilhar</button>
    </div>
  );
}
