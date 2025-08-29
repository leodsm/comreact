"use client";

import { Swiper } from "swiper/react";
import { Pagination, Keyboard, A11y, Mousewheel, Parallax } from "swiper/modules";
import type { Post } from "../types/post";
import StorySlide from "./StorySlide";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

interface SlideData {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function StoryDeck({ posts, startIndex }: { posts: Post[]; startIndex: number }) {
  const slidesFor = (post: Post): SlideData[] => {
    const base = [{ title: post.title, subtitle: post.subtitle, image: post.image }];
    const extras = (post.slides || []).map((s) => ({
      title: s.title ?? post.title,
      subtitle: s.subtitle ?? post.subtitle,
      image: s.src ?? post.image,
    }));
    return [...base, ...extras];
  };

  return (
    <Swiper
      direction="vertical"
      modules={[Pagination, Keyboard, A11y, Mousewheel, Parallax]}
      mousewheel={{ forceToAxis: true }}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      initialSlide={startIndex}
      className="h-full w-full"
      parallax
    >
      {posts.map((post) => (
        <StorySlide key={post.id} post={post} slides={slidesFor(post)} />
      ))}
    </Swiper>
  );
}
