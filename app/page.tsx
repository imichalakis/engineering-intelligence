'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Cloud, 
  Zap, 
  Shield, 
  Layers,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Cpu,
  Blocks,
  Lightbulb,
  Languages,
  ShoppingCart,
  Server,
  Github,
  Linkedin,
  Youtube,
  Send,
  MessageCircle
} from 'lucide-react';
import Logo from '@/components/Logo';

type Language = 'el' | 'en';

interface Translations {
  nav: {
    services: string;
    technology: string;
    about: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    cta1: string;
    cta2: string;
    stats: {
      projects: string;
      satisfaction: string;
      support: string;
      years: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  technology: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
    features: string[];
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  ctaFinal: {
    title: string;
    subtitle: string;
    button1: string;
    button2: string;
    taglineEn: string;
  };
  contact: {
    title: string;
    subtitle: string;
    location: string;
    email: string;
    phone: string;
  };
  footer: {
    tagline: string;
    description: string;
    quickLinks: {
      title: string;
      home: string;
      services: string;
      technology: string;
      blog: string;
      contact: string;
    };
    contactInfo: {
      title: string;
    };
    newsletter: {
      title: string;
      placeholder: string;
      button: string;
    };
    social: {
      title: string;
    };
    copyright: string;
  };
}

const translations: Record<Language, Translations> = {
  el: {
    nav: {
      services: 'Υπηρεσίες',
      technology: 'Τεχνολογία',
      about: 'Σχετικά',
      getStarted: 'Ξεκινήστε'
    },
    hero: {
      badge: 'Καινοτόμες Ψηφιακές Λύσεις',
      title1: 'Engineering',
      title2: 'Intelligence',
      description: 'Μετασχηματίστε την επιχείρησή σας με τεχνολογία αιχμής. Παρέχουμε ολοκληρωμένες ψηφιακές λύσεις που προωθούν την ανάπτυξη, την καινοτομία και το ανταγωνιστικό πλεονέκτημα.',
      cta1: 'Ξεκινήστε το Έργο σας',
      cta2: 'Εξερευνήστε Υπηρεσίες',
      stats: {
        projects: 'Έργα Παραδομένα',
        satisfaction: 'Ικανοποίηση Πελατών',
        support: 'Υποστήριξη Διαθέσιμη',
        years: 'Χρόνια Αριστείας'
      }
    },
    services: {
      title: 'Οι Υπηρεσίες μας',
      subtitle: 'Ολοκληρωμένες ψηφιακές λύσεις προσαρμοσμένες για να επιταχύνουν τον ψηφιακό μετασχηματισμό της επιχείρησής σας',
      items: [
        {
          title: 'Ανάπτυξη Εξειδικευμένου Λογισμικού',
          description: 'Προσαρμοσμένες εφαρμογές με σύγχρονες τεχνολογίες που ανταποκρίνονται στις επιχειρηματικές σας απαιτήσεις και επιταχύνουν τη λειτουργική αποδοτικότητα.'
        },
        {
          title: 'Τεχνητή Νοημοσύνη & Machine Learning',
          description: 'Αυτοματοποίηση διαδικασιών και προγνωστική ανάλυση δεδομένων για έξυπνες επιχειρηματικές αποφάσεις και ανταγωνιστικό πλεονέκτημα.'
        },
        {
          title: 'Υπηρεσίες Cloud & Υποδομές',
          description: 'Σχεδιασμός και διαχείριση επεκτάσιμων cloud αρχιτεκτονικών σε AWS, Azure και Google Cloud με έμφαση στην ασφάλεια και την αξιοπιστία.'
        },
        {
          title: 'Ψηφιακός Μετασχηματισμός',
          description: 'Στρατηγικός εκσυγχρονισμός επιχειρηματικών διαδικασιών με ολοκληρωμένη υιοθέτηση τεχνολογίας για μέγιστη απόδοση και καινοτομία.'
        },
        {
          title: 'Κυβερνοασφάλεια & Προστασία Δεδομένων',
          description: 'Προηγμένα συστήματα ασφαλείας, penetration testing και compliance που διασφαλίζουν την προστασία των ψηφιακών σας περιουσιακών στοιχείων.'
        },
        {
          title: 'Συμβουλευτική Τεχνολογίας',
          description: 'Στρατηγική καθοδήγηση στην υιοθέτηση αναδυόμενων τεχνολογιών και βέλτιστων πρακτικών για μακροπρόθεσμη επιχειρηματική επιτυχία.'
        },
        {
          title: 'Επιχειρηματικό Λογισμικό - Μεταπώληση & Ενσωμάτωση',
          description: 'Ολοκληρωμένες λύσεις POS, ERP, CRM και PMS με ανάλυση αναγκών, εγκατάσταση, παραμετροποίηση, εκπαίδευση και τεχνική υποστήριξη. Εξειδίκευση σε ξενοδοχεία, λιανικό εμπόριο, εστίαση και εταιρείες υπηρεσιών.'
        },
        {
          title: 'IT & Υποδομές Πληροφορικής',
          description: 'Ολοκληρωμένη τεχνική υποστήριξη IT, διαχείριση servers, δικτύων, cloud υπηρεσιών, κυβερνοασφάλειας, backup και συμβόλαια συντήρησης. Λειτουργούμε ως το εξωτερικό IT τμήμα για μικρομεσαίες επιχειρήσεις.'
        }
      ]
    },
    technology: {
      title: 'Τεχνολογία Αιχμής',
      subtitle: 'Χτίζουμε με τα πιο προηγμένα εργαλεία και frameworks της βιομηχανίας'
    },
    about: {
      title: 'Γιατί να Επιλέξετε την EI;',
      description: 'Με έδρα στην καρδιά της Κρήτης, Ελλάδα, το Engineering Intelligence συνδυάζει τη μεσογειακή καινοτομία με παγκόσμια αριστεία. Είμαστε μια ταχέως αναπτυσσόμενη εταιρεία τεχνολογίας αφοσιωμένη στην παροχή μετασχηματιστικών ψηφιακών λύσεων.',
      features: [
        'Agile μεθοδολογίες ανάπτυξης για ταχεία παράδοση',
        'Έμπειρη ομάδα με διεθνή εμπειρία',
        'Πελατοκεντρική προσέγγιση με διαφανή επικοινωνία',
        'Επεκτάσιμες λύσεις για μακροπρόθεσμη επιτυχία',
        'Υποστήριξη μετά την εκκίνηση και συνεχής βελτιστοποίηση'
      ],
      cards: [
        {
          title: 'Full-Stack Εμπειρία',
          description: 'Από frontend σε backend, cloud σε AI, κατακτάμε κάθε επίπεδο της σύγχρονης τεχνολογίας.'
        },
        {
          title: 'Ταχεία Καινοτομία',
          description: 'Γρήγορη παράδοση χωρίς συμβιβασμούς στην ποιότητα ή τα πρότυπα ασφαλείας.'
        },
        {
          title: 'Ασφάλεια Επιχειρήσεων',
          description: 'Πρωτόκολλα ασφαλείας τραπεζικού επιπέδου που προστατεύουν τα δεδομένα και τις εφαρμογές σας.'
        }
      ]
    },
    cta: {
      title: 'Έτοιμοι να Μετασχηματίσετε την Επιχείρησή σας;',
      subtitle: 'Ας συζητήσουμε πώς μπορούμε να σας βοηθήσουμε να επιτύχετε τους ψηφιακούς σας στόχους',
      button: 'Προγραμματίστε Συνάντηση'
    },
    ctaFinal: {
      title: 'Μετασχηματίστε την Επιχείρησή σας με Έξυπνη Μηχανική',
      subtitle: 'Συνδυάζουμε καινοτομία, τεχνολογική αριστεία και επιχειρηματική στρατηγική για να δημιουργήσουμε λύσεις που οδηγούν σε μετρήσιμα αποτελέσματα.',
      button1: 'Κλείστε Συνάντηση',
      button2: 'Ζητήστε Προσφορά',
      taglineEn: 'Transform your business with intelligent engineering'
    },
    contact: {
      title: 'Επικοινωνήστε',
      subtitle: 'Ας αρχίσουμε να χτίζουμε μαζί την επόμενη ψηφιακή σας λύση',
      location: 'Τοποθεσία',
      email: 'Email',
      phone: 'Τηλέφωνο'
    },
    footer: {
      tagline: 'Χτίζουμε την Τεχνολογία του Αύριο Σήμερα',
      description: 'Εξειδικευμένες λύσεις τεχνολογίας για επιχειρήσεις που θέλουν να καινοτομήσουν',
      quickLinks: {
        title: 'Σύνδεσμοι',
        home: 'Αρχική',
        services: 'Υπηρεσίες',
        technology: 'Τεχνολογία',
        blog: 'Blog',
        contact: 'Επικοινωνία'
      },
      contactInfo: {
        title: 'Επικοινωνία'
      },
      newsletter: {
        title: 'Newsletter',
        placeholder: 'Το email σας',
        button: 'Εγγραφή'
      },
      social: {
        title: 'Ακολουθήστε μας'
      },
      copyright: '© 2025 Engineering Intelligence. Όλα τα δικαιώματα διατηρούνται.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      technology: 'Technology',
      about: 'About',
      getStarted: 'Get Started'
    },
    hero: {
      badge: 'Innovative Digital Solutions',
      title1: 'Engineering',
      title2: 'Intelligence',
      description: 'Transform your business with cutting-edge technology. We deliver end-to-end digital solutions that drive growth, innovation, and competitive advantage.',
      cta1: 'Start Your Project',
      cta2: 'Explore Services',
      stats: {
        projects: 'Projects Delivered',
        satisfaction: 'Client Satisfaction',
        support: 'Support Available',
        years: 'Years Excellence'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive digital solutions tailored to accelerate your business transformation',
      items: [
        {
          title: 'Custom Software Development',
          description: 'Tailored applications built with modern technologies that meet your business requirements and accelerate operational efficiency.'
        },
        {
          title: 'AI & Machine Learning',
          description: 'Process automation and predictive data analytics for intelligent business decisions and competitive advantage.'
        },
        {
          title: 'Cloud Services & Infrastructure',
          description: 'Design and management of scalable cloud architectures on AWS, Azure, and Google Cloud with emphasis on security and reliability.'
        },
        {
          title: 'Digital Transformation',
          description: 'Strategic modernization of business processes with comprehensive technology adoption for maximum performance and innovation.'
        },
        {
          title: 'Cybersecurity & Data Protection',
          description: 'Advanced security systems, penetration testing, and compliance ensuring protection of your digital assets.'
        },
        {
          title: 'Technology Consulting',
          description: 'Strategic guidance in adopting emerging technologies and best practices for long-term business success.'
        },
        {
          title: 'Business Software - Reselling & Integration',
          description: 'Complete POS, ERP, CRM, and PMS solutions with needs analysis, installation, configuration, training, and technical support. Specialized in hotels, retail, restaurants, and service companies.'
        },
        {
          title: 'IT & Infrastructure Services',
          description: 'Comprehensive IT support, server management, networks, cloud services, cybersecurity, backup, and maintenance contracts. We operate as the outsourced IT department for SMEs.'
        }
      ]
    },
    technology: {
      title: 'Cutting-Edge Technology',
      subtitle: 'Building with the most advanced tools and frameworks in the industry'
    },
    about: {
      title: 'Why Choose EI?',
      description: 'Based in the heart of Crete, Greece, Engineering Intelligence combines Mediterranean innovation with global excellence. We\'re a rapidly growing technology company committed to delivering transformative digital solutions.',
      features: [
        'Agile development methodologies for rapid delivery',
        'Expert team with international experience',
        'Client-centric approach with transparent communication',
        'Scalable solutions built for long-term success',
        'Post-launch support and continuous optimization'
      ],
      cards: [
        {
          title: 'Full-Stack Expertise',
          description: 'From frontend to backend, cloud to AI, we master every layer of modern technology.'
        },
        {
          title: 'Rapid Innovation',
          description: 'Fast-paced delivery without compromising quality or security standards.'
        },
        {
          title: 'Enterprise Security',
          description: 'Bank-level security protocols protecting your data and applications.'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Let\'s discuss how we can help you achieve your digital goals',
      button: 'Schedule a Consultation'
    },
    ctaFinal: {
      title: 'Transform Your Business with Intelligent Engineering',
      subtitle: 'We combine innovation, technological excellence, and business strategy to create solutions that drive measurable results.',
      button1: 'Schedule a Meeting',
      button2: 'Request a Quote',
      taglineEn: 'Transform your business with intelligent engineering'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s start building your next digital solution together',
      location: 'Location',
      email: 'Email',
      phone: 'Phone'
    },
    footer: {
      tagline: 'Building Tomorrow\'s Technology Today',
      description: 'Specialized technology solutions for businesses that want to innovate',
      quickLinks: {
        title: 'Quick Links',
        home: 'Home',
        services: 'Services',
        technology: 'Technology',
        blog: 'Blog',
        contact: 'Contact'
      },
      contactInfo: {
        title: 'Contact'
      },
      newsletter: {
        title: 'Newsletter',
        placeholder: 'Your email',
        button: 'Subscribe'
      },
      social: {
        title: 'Follow Us'
      },
      copyright: '© 2025 Engineering Intelligence. All rights reserved.'
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('el');
  const t = translations[language];

  const serviceIcons = [Code2, Sparkles, Cloud, Blocks, Shield, Lightbulb, ShoppingCart, Server];
  const services = t.services.items.map((service, index) => ({
    icon: serviceIcons[index],
    ...service
  }));

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'AWS', 
    'Docker', 'Kubernetes', 'TensorFlow', 'PostgreSQL', 'MongoDB', 'GraphQL'
  ];

  const stats = [
    { value: '50+', label: t.hero.stats.projects },
    { value: '98%', label: t.hero.stats.satisfaction },
    { value: '24/7', label: t.hero.stats.support },
    { value: '3+', label: t.hero.stats.years },
  ];

  const aboutCards = [
    { icon: Layers, ...t.about.cards[0] },
    { icon: Zap, ...t.about.cards[1] },
    { icon: Shield, ...t.about.cards[2] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="w-32 sm:w-40">
                <Logo variant="full" width={160} height={34} className="w-full h-auto" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex gap-8 items-center"
            >
              <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">{t.nav.services}</a>
              <a href="#technology" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">{t.nav.technology}</a>
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">{t.nav.about}</a>
              
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
                href="#contact" 
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                {t.nav.getStarted}
              </a>
            </motion.div>

            {/* Mobile Language Switcher */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex md:hidden items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full"
            >
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
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{t.hero.badge}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight break-words">
                {t.hero.title1}
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t.hero.title2}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
                <a 
                  href="#contact"
                  className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                >
                  {t.hero.cta1}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-800/50 backdrop-blur text-white rounded-full font-semibold text-base sm:text-lg hover:bg-slate-800 transition-all flex items-center justify-center border border-slate-700"
                >
                  {t.hero.cta2}
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-400 break-words">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-cyan-500/20"></div>
                <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                {/* Floating Tech Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {[...Array(8)].map((_, i) => {
                      const angle = (i * 360) / 8;
                      const radius = 120;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      
                      return (
                        <motion.div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur border border-cyan-500/30 rounded-xl flex items-center justify-center"
                          style={{ x, y, marginLeft: -24, marginTop: -24 }}
                          animate={{ 
                            y: [y - 10, y + 10, y - 10],
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        >
                          <Code2 className="w-6 h-6 text-cyan-400" />
                        </motion.div>
                      );
                    })}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/50 p-4">
                      <Logo variant="icon" width={48} height={60} className="brightness-0 invert" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 break-words">
              {language === 'el' ? 'Οι ' : 'Our '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{language === 'el' ? 'Υπηρεσίες μας' : 'Services'}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group p-6 sm:p-8 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 w-full"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 break-words">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm break-words">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 break-words">
              {language === 'el' ? 'Τεχνολογία ' : 'Cutting-Edge '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{language === 'el' ? 'Αιχμής' : 'Technology'}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              {t.technology.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-full text-slate-300 font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-sm sm:text-base whitespace-nowrap"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 break-words">
                {language === 'el' ? 'Γιατί να Επιλέξετε το ' : 'Why Choose '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">EI</span>
                {language === 'el' ? ';' : '?'}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed break-words">
                {t.about.description}
              </p>
              
              <div className="space-y-4 mb-8 lg:mb-0">
                {t.about.features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-300 break-words">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="w-full lg:aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-6 sm:p-8 backdrop-blur">
                <div className="h-full flex flex-col justify-center space-y-6 lg:space-y-8">
                  {aboutCards.map((card, index) => (
                    <div key={index} className="p-4 sm:p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                      <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 break-words">{card.title}</h3>
                      <p className="text-sm sm:text-base text-slate-400 break-words">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 break-words px-4">
              {t.cta.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 px-4">
              {t.cta.subtitle}
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
            >
              {t.cta.button}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Full-Width CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2979FF]/20 via-[#00D4CF]/10 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2979FF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D4CF]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-medium uppercase tracking-wider">
                {t.ctaFinal.taglineEn}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight break-words px-4">
              {t.ctaFinal.title}
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              {t.ctaFinal.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a 
                href="#contact"
                className="group px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#2979FF] to-[#00D4CF] text-white rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-3"
              >
                {t.ctaFinal.button1}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 sm:px-10 sm:py-5 bg-slate-800/50 backdrop-blur-xl text-white rounded-full font-bold text-base sm:text-lg hover:bg-slate-800 transition-all flex items-center justify-center border border-slate-700/50 hover:border-cyan-500/50"
              >
                {t.ctaFinal.button2}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 break-words">
              {language === 'el' ? 'Επικοινωνήστε' : 'Get in '}
              {language === 'en' && <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="p-6 sm:p-8 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl text-center hover:border-cyan-500/50 transition-all w-full"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 break-words">{t.contact.location}</h3>
              <p className="text-sm sm:text-base text-slate-400 break-words">{language === 'el' ? 'Κρήτη, Ελλάδα' : 'Crete, Greece'}</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl text-center hover:border-cyan-500/50 transition-all w-full"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 break-words">{t.contact.email}</h3>
              <a 
                href="mailto:hello@engineeringintelligence.io" 
                className="text-sm sm:text-base text-slate-400 hover:text-cyan-400 transition-colors break-words"
              >
                hello@engineeringintelligence.io
              </a>
            </motion.div>

            {/* Phone Card with WhatsApp & Viber */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 sm:p-8 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl text-center hover:border-cyan-500/50 transition-all w-full"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 break-words">{t.contact.phone}</h3>
              <a 
                href="tel:+306980344281" 
                className="text-sm sm:text-base text-slate-400 hover:text-cyan-400 transition-colors break-words block mb-4"
              >
                +30 698 034 4281
              </a>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://wa.me/306980344281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 hover:border-green-500/50 rounded-lg transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-medium text-green-400">WhatsApp</span>
                </a>
                <a
                  href="viber://chat?number=%2B306980344281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-500/50 rounded-lg transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-medium text-purple-400">Viber</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <div className="w-40 sm:w-44">
                  <Logo variant="full" width={180} height={38} className="w-full h-auto" />
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t.footer.description}
              </p>
              
              {/* Social Icons */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-300">{t.footer.social.title}</p>
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
                  >
                    <Github className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
                  >
                    <Youtube className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4">{t.footer.quickLinks.title}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {t.footer.quickLinks.home}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {t.footer.quickLinks.services}
                  </a>
                </li>
                <li>
                  <a href="#technology" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {t.footer.quickLinks.technology}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {t.footer.quickLinks.blog}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {t.footer.quickLinks.contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4">{t.footer.contactInfo.title}</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">
                    {language === 'el' ? 'Κρήτη, Ελλάδα' : 'Crete, Greece'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <a href="mailto:hello@engineeringintelligence.io" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    hello@engineeringintelligence.io
                  </a>
                </li>
                <li className="flex flex-col gap-2">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <a href="tel:+306980344281" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                      +30 698 034 4281
                    </a>
                  </div>
                  <div className="flex items-center gap-2 ml-8">
                    <a
                      href="https://wa.me/306980344281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600/10 hover:bg-green-600/20 border border-green-500/20 hover:border-green-500/40 rounded-md transition-all text-xs text-green-400 hover:text-green-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </a>
                    <a
                      href="viber://chat?number=%2B306980344281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-500/40 rounded-md transition-all text-xs text-purple-400 hover:text-purple-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Viber
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4">{t.footer.newsletter.title}</h4>
              <p className="text-slate-400 text-sm mb-4">
                {language === 'el' 
                  ? 'Λάβετε τα τελευταία νέα και ενημερώσεις' 
                  : 'Get the latest news and updates'}
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder={t.footer.newsletter.placeholder}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
                >
                  {t.footer.newsletter.button}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm text-slate-400 text-center md:text-left break-words">
                {t.footer.copyright}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 text-center break-words">
                {t.footer.tagline}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
