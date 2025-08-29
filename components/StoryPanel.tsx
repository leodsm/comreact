"use client";

import Image from "next/image";

export default function StoryPanel({ title, subtitle, image, article }: { title?: string; subtitle?: string; image?: string; article?: string; }) {
  const fallback = !image;
  return (
    <div className="relative w-full h-full">
      {!fallback ? (
        <Image src={image!} alt={title ?? "story"} fill sizes="(max-width: 768px) 100vw, 560px" className="object-cover" />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-neutral-900 text-white/80">Sem imagem</div>
      )}
      <div className="overlay-gradient absolute inset-0" data-swiper-parallax-opacity="0.9" />
      <div className="absolute inset-x-0 bottom-0 story-safe text-white" data-swiper-parallax="-25%">
        {title ? <h2 className="text-xl font-poppins font-bold">{title}</h2> : null}
        {subtitle ? <p className="opacity-90">{subtitle}</p> : null}
        {article ? (
          <a
            href="#"
            className="mt-3 inline-block underline underline-offset-2 decoration-2"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Leia a matéria completa
          </a>
        ) : null}
      </div>
    </div>
  );
}
