"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void; }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child as={Fragment} enter="ease-out duration-150" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>
        <div className="fixed inset-0">
          <div className="absolute left-0 top-0 h-full w-80 max-w-[90%] bg-white dark:bg-[#0f1424] shadow-2xl p-4">
            <div className="font-semibold mb-2">Menu</div>
            <nav className="space-y-2 text-sm">
              <a className="block hover:underline" href="#">Início</a>
              <a className="block hover:underline" href="#">Categorias</a>
              <a className="block hover:underline" href="#">Sobre</a>
            </nav>
            <button onClick={onClose} className="mt-4 text-xs opacity-70 underline">Fechar</button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
