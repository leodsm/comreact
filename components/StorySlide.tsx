"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y, EffectCreative, Parallax } from "swiper/modules";
import type { Post } from "../types/post";
import StoryPanel from "./StoryPanel";

interface SlideData {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function StorySlide({ post, slides }: { post: Post; slides: SlideData[] }) {
  return (
    <SwiperSlide className="flex items-center justify-center">
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
          {slides.map((s, idx) => (
            <SwiperSlide key={idx}>
              <StoryPanel title={s.title} subtitle={s.subtitle} image={s.image} article={post.article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SwiperSlide>
  );
}
