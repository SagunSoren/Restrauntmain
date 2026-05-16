"use client";

import { motion } from "framer-motion";
import { Phone, Menu } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Navbar({ name }: { name: string }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Brand */}
        <Link
          href="#"
          className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight"
        >
          {name}
        </Link>

        {/* Right: Desktop */}
        <div className="hidden md:flex items-center gap-8 text-stone-600">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-amber-700 transition-colors font-medium"
          >
            <Phone size={18} />
            <span>(+91) 6203767622</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-amber-700 transition-colors font-medium"
          >
            <FaInstagram size={20} />
            <span>Instagram</span>
          </a>
        </div>

        {/* Right: Mobile */}
        <div className="flex md:hidden items-center gap-5 text-stone-600">
          <a href="#" className="hover:text-amber-700 transition-colors">
            <FaInstagram size={24} />
          </a>
          <button className="p-1 hover:text-amber-700 transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
