"use client";
export default function ShareRow({ title }: { title: string }){
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) await navigator.share({ title, url });
      else {
        await navigator.clipboard.writeText(url);
        alert("Link copiado!");
      }
    } catch {}
  };
  return (
    <div className="mt-4 flex items-center gap-2">
      <button onClick={share} className="px-3 py-1.5 rounded bg-[color:var(--brand-blue)] text-white text-sm">Compartilhar</button>
    </div>
  );
}
