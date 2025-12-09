'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { 
  ArrowRight, 
  CheckCircle2,
  QrCode,
  Utensils,
  CreditCard,
  Zap,
  Gift,
  Monitor,
  Wifi,
  Users,
  Hotel,
  MessageCircle
} from 'lucide-react';
import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

type Language = 'el' | 'en';

interface FreemiumTranslations {
  nav: {
    services: string;
    technology: string;
    about: string;
    contact: string;
    getStarted: string;
    freemium: string;
    freemiumSubmenu: string;
    home: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  freemiumSection: {
    title: string;
    features: string[];
    description: string;
  };
  addons: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    text: string;
  };
}

const translations: Record<Language, FreemiumTranslations> = {
  el: {
    nav: {
      services: 'Υπηρεσίες',
      technology: 'Τεχνολογία',
      about: 'Σχετικά',
      contact: 'Επικοινωνία',
      getStarted: 'Ξεκινήστε Τώρα',
      freemium: 'Freemium Λύσεις',
      freemiumSubmenu: 'Ψηφιακές Λύσεις Εστίασης',
      home: 'Αρχική'
    },
    hero: {
      title: 'Ψηφιακές Λύσεις Εστίασης',
      subtitle: 'Μοντέρνες εμπειρίες χωρίς επενδυτικό κόστος'
    },
    freemiumSection: {
      title: 'Ψηφιακό Μενού (Freemium Edition)',
      features: [
        'Σάρωση μέσω QR',
        'Mobile-first σχεδίαση',
        'Ελληνικό + Αγγλικό μενού',
        'Απεριόριστες αλλαγές',
        'Hosting από εμάς',
        'Ενσωμάτωση σε τραπέζια, counters, ομπρέλες'
      ],
      description: 'Το Freemium μοντέλο μας σας επιτρέπει να ξεκινήσετε με ένα πλήρως λειτουργικό ψηφιακό μενού χωρίς κανένα αρχικό κόστος. Απλώς σαρώστε το QR code και οι πελάτες σας θα έχουν άμεση πρόσβαση στο μενού σας σε κινητό, tablet ή desktop. Μπορείτε να προσθέσετε προηγμένες λειτουργίες ανά πάσα στιγμή.'
    },
    addons: {
      title: 'Προηγμένες Λειτουργίες (Add-ons)',
      subtitle: 'Αναβαθμίστε την εμπειρία σας με επιπλέον δυνατότητες',
      items: [
        {
          title: 'Digital Ordering',
          description: 'Παραγγελίες απευθείας από το τραπέζι χωρίς αναμονή'
        },
        {
          title: 'Online Payments',
          description: 'Ασφαλείς πληρωμές με κάρτα ή ψηφιακό πορτοφόλι'
        },
        {
          title: 'POS Integration',
          description: 'Αυτόματη σύνδεση με το σύστημα ταμειακής μηχανής'
        },
        {
          title: 'Loyalty Program',
          description: 'Προγράμματα επιβράβευσης και πιστότητας πελατών'
        },
        {
          title: 'Digital Signage',
          description: 'Ψηφιακές οθόνες με δυναμικό περιεχόμενο'
        },
        {
          title: 'Wi-Fi Captive Portal',
          description: 'Προσαρμοσμένη σελίδα υποδοχής για το Wi-Fi σας'
        },
        {
          title: 'CRM System',
          description: 'Διαχείριση πελατών και στατιστικά συμπεριφοράς'
        },
        {
          title: 'Hotel Guest Experience',
          description: 'Ολοκληρωμένη λύση για ξενοδοχειακές μονάδες'
        }
      ]
    },
    cta: {
      title: 'Ξεκινήστε Δωρεάν Σήμερα',
      subtitle: 'Ενεργοποιήστε το ψηφιακό σας μενού σε λιγότερο από 24 ώρες',
      button: 'Ζητήστε δωρεάν ενεργοποίηση'
    },
    footer: {
      text: 'Digital Hospitality by Engineering Intelligence'
    }
  },
  en: {
    nav: {
      services: 'Services',
      technology: 'Technology',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started',
      freemium: 'Freemium Solutions',
      freemiumSubmenu: 'Digital Hospitality',
      home: 'Home'
    },
    hero: {
      title: 'Digital Hospitality',
      subtitle: 'Modern experiences without upfront cost'
    },
    freemiumSection: {
      title: 'Digital Menu (Freemium Edition)',
      features: [
        'QR scanning',
        'Mobile-first design',
        'Greek + English menu',
        'Unlimited edits',
        'Hosted by us',
        'Table / counter / umbrella placement'
      ],
      description: 'Our Freemium model allows you to start with a fully functional digital menu at no initial cost. Simply scan the QR code and your customers will have instant access to your menu on mobile, tablet, or desktop. You can add advanced features at any time.'
    },
    addons: {
      title: 'Advanced Features (Add-ons)',
      subtitle: 'Upgrade your experience with additional capabilities',
      items: [
        {
          title: 'Digital Ordering',
          description: 'Orders directly from the table without waiting'
        },
        {
          title: 'Online Payments',
          description: 'Secure card or digital wallet payments'
        },
        {
          title: 'POS Integration',
          description: 'Automatic connection with your POS system'
        },
        {
          title: 'Loyalty Program',
          description: 'Customer rewards and loyalty programs'
        },
        {
          title: 'Digital Signage',
          description: 'Digital displays with dynamic content'
        },
        {
          title: 'Wi-Fi Captive Portal',
          description: 'Custom landing page for your Wi-Fi'
        },
        {
          title: 'CRM System',
          description: 'Customer management and behavior analytics'
        },
        {
          title: 'Hotel Guest Experience',
          description: 'Complete solution for hospitality units'
        }
      ]
    },
    cta: {
      title: 'Start Free Today',
      subtitle: 'Activate your digital menu in less than 24 hours',
      button: 'Request free activation'
    },
    footer: {
      text: 'Digital Hospitality by Engineering Intelligence'
    }
  }
};

export default function FreemiumPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const addonIcons = [Utensils, CreditCard, Zap, Gift, Monitor, Wifi, Users, Hotel];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <Navbar translations={t.nav} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Utensils className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">{t.nav.freemium}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Freemium Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {t.freemiumSection.title}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {t.freemiumSection.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              {t.freemiumSection.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t.addons.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              {t.addons.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.addons.items.map((addon, index) => {
              const Icon = addonIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group p-6 sm:p-8 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 w-full"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{addon.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{addon.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2979FF]/20 via-[#00D4CF]/10 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2979FF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D4CF]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t.cta.title}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>

            <a 
              href="https://wa.me/306980344281"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.button}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-950 border-t border-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-40 sm:w-44">
              <Logo variant="full" width={180} height={38} className="w-full h-auto" />
            </div>
            <p className="text-sm text-slate-400 text-center">
              {t.footer.text}
            </p>
            <Link 
              href="/"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {t.nav.home}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
