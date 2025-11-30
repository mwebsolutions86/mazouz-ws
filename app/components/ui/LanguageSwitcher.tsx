'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' } // Arabe
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Détection de la locale actuelle via l'URL (ex: /fr/...)
  const currentLocale = pathname.split('/')[1] || 'fr';

  const switchLanguage = (newLocale: string) => {
    // Remplace le segment de langue dans l'URL (ex: /fr/agence -> /en/agence)
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* BOUTON DECLENCHEUR */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 border border-white/20 rounded-full text-xs font-bold hover:bg-white/10 hover:border-cyan-500/50 transition-all bg-black/50 backdrop-blur-sm text-gray-300 hover:text-cyan-400 group"
      >
        <Globe size={14} className="group-hover:rotate-180 transition-transform duration-500" />
        <span className="uppercase tracking-widest">{currentLocale}</span>
        <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* MENU DÉROULANT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-24 bg-black/90 border border-white/10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="flex flex-col p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`px-4 py-2 text-xs font-mono font-bold text-left hover:bg-white/10 transition-colors rounded-lg flex items-center justify-between ${
                    currentLocale === lang.code ? 'text-cyan-400 bg-cyan-500/10' : 'text-gray-400'
                  }`}
                >
                  {lang.label}
                  {currentLocale === lang.code && <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_#06b6d4]" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}