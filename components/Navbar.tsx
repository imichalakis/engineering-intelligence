'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Languages, MessageCircle } from 'lucide-react';
import Logo from '@/components/Logo';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavTranslations {
  services: string;
  technology: string;
  about: string;
  contact: string;
  getStarted: string;
  freemium: string;
  freemiumSubmenu: string;
}

interface NavbarProps {
  translations: NavTranslations;
}

export default function Navbar({ translations: t }: NavbarProps) {
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-32 sm:w-40">
              <Logo variant="full" width={160} height={34} className="w-full h-auto" />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/#services" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              {t.services}
            </a>
            <a href="/#technology" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              {t.technology}
            </a>
            <a href="/#about" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
              {t.about}
            </a>
            
            {/* Freemium Dropdown */}
            <div className="relative group">
              <button className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium flex items-center gap-1">
                {t.freemium}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link 
                  href="/freemium"
                  className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-colors text-sm rounded-lg m-2"
                >
                  {t.freemiumSubmenu}
                </Link>
              </div>
            </div>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full">
              <Languages className="w-4 h-4 text-cyan-400" />
              <button
                onClick={() => setLanguage('el')}
                className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${
                  language === 'el' 
                    ? 'bg-cyan-500/20 text-cyan-400' 
                    : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                ΕΛ
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-medium rounded-md transition-all ${
                  language === 'en' 
                    ? 'bg-cyan-500/20 text-cyan-400' 
                    : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                EN
              </button>
            </div>

            <a 
              href="/#contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              {t.getStarted}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="flex md:hidden items-center justify-center w-10 h-10 text-slate-300 hover:text-cyan-400 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {/* Navigation Links */}
            <a 
              href="/#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-100 text-lg font-medium py-2 hover:text-cyan-400 transition-colors"
            >
              {t.services}
            </a>
            
            <a 
              href="/#technology"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-100 text-lg font-medium py-2 hover:text-cyan-400 transition-colors"
            >
              {t.technology}
            </a>
            
            <a 
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-100 text-lg font-medium py-2 hover:text-cyan-400 transition-colors"
            >
              {t.about}
            </a>
            
            <a 
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-100 text-lg font-medium py-2 hover:text-cyan-400 transition-colors"
            >
              {t.contact}
            </a>
            
            {/* Freemium Link */}
            <div className="border-t border-slate-800/50 pt-3 mt-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {t.freemium}
              </div>
              <Link 
                href="/freemium"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-100 text-lg font-medium py-2 hover:text-cyan-400 transition-colors block"
              >
                {t.freemiumSubmenu}
              </Link>
            </div>
            
            {/* Language Toggle */}
            <div className="border-t border-slate-800/50 pt-3 mt-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                {language === 'el' ? 'Γλώσσα' : 'Language'}
              </div>
              <div className="flex items-center gap-3">
                <Languages className="w-5 h-5 text-cyan-400" />
                <div className="flex items-center gap-2 flex-1">
                  <button
                    onClick={() => setLanguage('el')}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      language === 'el'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
                    }`}
                  >
                    ΕΛ
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      language === 'en'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'bg-slate-800/50 text-slate-400 border border-slate-700/50'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-4">
              <a 
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-base text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                {t.getStarted}
              </a>
            </div>
            
            {/* WhatsApp */}
            <div className="mt-2">
              <a 
                href="https://wa.me/306980344281"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 rounded-lg font-medium text-base transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
