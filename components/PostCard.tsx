"use client";
import Image from "next/image";
import { categoryColor } from "../lib/colors";
import { BLUR_SVG } from "../lib/blur";
import { motion } from "framer-motion";
import type { Post } from "../types/post";

export default function PostCard({ post, onOpen }: { post: Post; onOpen: (post: Post) => void; }) {
  const catColor = categoryColor(post.category);
  return (
    <motion.button
      onClick={() => onOpen(post)}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--brand-blue)]"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
    >
      <div className="absolute inset-1 rounded-2xl overflow-hidden shadow-card">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL={BLUR_SVG(8, 8, post.id)}
        />
        <div className="overlay-gradient absolute inset-0"></div>
      </div>
      <div className="absolute inset-x-2 bottom-2 p-3 sm:p-4 text-left text-white">
        <span className="badge" style={{background:`${catColor}30`, borderColor:`${catColor}66`}}>{post.category}</span>
        <h3 className="mt-1 text-[18px] sm:text-[19px] font-semibold leading-tight font-poppins">{post.title}</h3>
        <p className="text-[13px] leading-5 opacity-90">{post.subtitle}</p>
      </div>
    </motion.button>
  );
}
