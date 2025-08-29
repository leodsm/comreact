"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import type { Post } from "../types/post";
import StoryDeck from "./StoryDeck";

export default function StoryDeckModal({ open, onClose, posts, startIndex }: { open: boolean; onClose: () => void; posts: Post[]; startIndex: number }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-0 sm:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[900px] h-[calc(100vh-72px)] max-h-[calc(100vh-72px)] rounded-xl3 bg-transparent shadow-none">
                <button
                  onClick={onClose}
                  aria-label="Fechar"
                  className="absolute right-3 top-3 z-50 p-2 rounded bg-white/90 hover:bg-white text-neutral-900"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>

                <StoryDeck posts={posts} startIndex={startIndex} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
