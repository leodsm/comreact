"use client";

import Header from "../components/Header";
import PostCard from "../components/PostCard";
import StoryDeckModal from "../components/StoryDeckModal";
import { posts as samplePosts } from "../data/posts";
import { useState, useMemo } from "react";
import CategoryFilter, { Category } from "../components/CategoryFilter";
import SkeletonCard from "../components/SkeletonCard";
import { useInfinite } from "../hooks/useInfinite";
import { motion } from "framer-motion";
import type { Post } from "../types/post";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [cat, setCat] = useState<Category>("Tudo");

  const posts = samplePosts.slice(2);

  const filtered = useMemo(() => {
    if (cat === "Tudo") return posts;
    return posts.filter((p) => p.category === cat);
  }, [posts, cat]);

  const { items, sentinelRef, done } = useInfinite(filtered, 9);

  const onOpen = (p: Post) => {
    const idx = filtered.findIndex((pp) => pp.id === p.id);
    setActiveIndex(Math.max(0, idx));
    setOpen(true);
  };
  const onClose = () => setOpen(false);

  return (
    <main>
      <Header />
      <section className="px-3 py-4">
        <CategoryFilter value={cat} onChange={setCat} />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {items.length === 0
            ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
            : items.map((p) => <PostCard key={p.id} post={p} onOpen={onOpen} />)}
        </motion.div>

        {!done && <div ref={sentinelRef} className="h-12" />}
      </section>

      <StoryDeckModal open={open} onClose={onClose} posts={filtered} startIndex={activeIndex} />
    </main>
  );
}
