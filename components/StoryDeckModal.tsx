"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import type { Post } from "../types/post";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y, Mousewheel, EffectCreative, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function StoryDeckModal({ open, onClose, posts, startIndex }: { open:boolean; onClose:()=>void; posts:Post[]; startIndex:number; }){
  const [postIndex, setPostIndex] = useState(startIndex);

  const slidesFor = (idx: number) => {
    const p = posts[idx];
    if (!p) return [];
    const base = [{ title: p.title, subtitle: p.subtitle, image: p.image }];
    const extras = (p.slides || []).map((s) => ({ title: s.title ?? p.title, subtitle: s.subtitle ?? p.subtitle, image: s.src ?? p.image }));
    return [...base, ...extras];
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-0 sm:p-4">
            <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-[900px] h-[calc(100vh-72px)] max-h-[calc(100vh-72px)] rounded-xl3 bg-transparent shadow-none">
                <button onClick={onClose} aria-label="Fechar" className="absolute right-3 top-3 z-50 p-2 rounded bg-white/90 hover:bg-white text-neutral-900">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>

                <Swiper
                  direction="vertical"
                  modules={[Pagination, Keyboard, A11y, Mousewheel, Parallax]}
                  mousewheel={{ forceToAxis: true }}
                  keyboard={{ enabled: true }}
                  pagination={{ clickable: true }}
                  initialSlide={startIndex}
                  onSlideChange={(e) => setPostIndex(e.activeIndex)}
                  className="h-full w-full"
                  parallax
                >
                  {posts.map((post, pIdx) => (
                    <SwiperSlide key={post.id} className="flex items-center justify-center">
                      <div className="relative aspect-[9/16] h-full max-w-[560px] w-full rounded-[24px] overflow-hidden shadow-2xl bg-neutral-900" data-swiper-parallax-scale="0.98">
                        <Swiper
                          modules={[Navigation, Pagination, Keyboard, A11y, EffectCreative, Parallax]}
                          navigation
                          pagination={{ clickable: true }}
                          keyboard={{ enabled: true }}
                          effect="creative"
                          creativeEffect={{
                            prev: { shadow: true, translate: ["-30%", 0, -200], rotate: [0, 0, -2], scale: 0.94 },
                            next: { translate: ["30%", 0, -200], rotate: [0, 0, 2], scale: 0.94 },
                          }}
                          speed={550}
                          parallax
                          className="absolute inset-0 h-full w-full"
                        >
                          {slidesFor(pIdx).map((s, idx) => (
                            <SwiperSlide key={idx}>
                              <Panel title={s.title} subtitle={s.subtitle} image={s.image} article={post.article} />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function Panel({ title, subtitle, image, article }: { title?: string; subtitle?: string; image?: string; article?: string; }) {
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
        {article ? <a href="#" className="mt-3 inline-block underline underline-offset-2 decoration-2" onClick={(e)=>{e.preventDefault();}}>Leia a matéria completa</a> : null}
      </div>
    </div>
  );
}
