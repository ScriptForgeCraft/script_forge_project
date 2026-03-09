import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: { am: 'Վեբ հավելված', ru: 'Веб-приложение', en: 'Web Application' },
    image: 'https://picsum.photos/seed/fintech/800/600',
    description: {
      am: 'Բարդ վահանակ ֆինանսական վերլուծության համար՝ իրական ժամանակում տվյալների վիզուալիզացմամբ:',
      ru: 'Сложная панель для финансового анализа с визуализацией данных в реальном времени.',
      en: 'A complex dashboard for financial analysis with real-time data visualization.',
    },
  },
  {
    title: 'EcoStore E-Commerce',
    category: { am: 'Առցանց խանութ', ru: 'Интернет-магазин', en: 'Online Shop' },
    image: 'https://picsum.photos/seed/shop/800/600',
    description: {
      am: 'Ժամանակակից առցանց խանութ կայուն արտադրանքի համար՝ Shopify ինտեգրմամբ:',
      ru: 'Современный интернет-магазин экологичных товаров с интеграцией Shopify.',
      en: 'A modern online shop for sustainable products with Shopify integration.',
    },
  },
  {
    title: 'HealthTrack Mobile',
    category: { am: 'Մոբայլ հավելված', ru: 'Мобильное приложение', en: 'Mobile App' },
    image: 'https://picsum.photos/seed/health/800/600',
    description: {
      am: 'Cross-Platform հավելված ֆիթնեսի և առողջության տվյալների վերահսկման համար:',
      ru: 'Кроссплатформенное приложение для мониторинга данных о фитнесе и здоровье.',
      en: 'A cross-platform app for monitoring fitness and health data.',
    },
  },
  {
    title: 'Real Estate Portal',
    category: { am: 'Վեբ կայք', ru: 'Веб-сайт', en: 'Website' },
    image: 'https://picsum.photos/seed/realestate/800/600',
    description: {
      am: 'Արագագործ անշարժ գույքի պորտալ՝ ինտերակտիվ քարտեզով որոնման հնարավորությամբ:',
      ru: 'Высокопроизводительный портал недвижимости с интерактивным поиском по карте.',
      en: 'A high-performance real estate portal with interactive map search.',
    },
  },
];

export default function Portfolio() {
  const { t, language } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">{t('portfolio.tag')}</h2>
            <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('portfolio.title')}</p>
            <p className="text-lg text-slate-600">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
            >
              {t('portfolio.viewAll')}
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <span className="text-indigo-600 text-sm font-bold uppercase tracking-wider mb-2 block">
                  {(project.category as any)[language]}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {(project.description as any)[language]}
                </p>
                <button className="text-slate-900 font-bold flex items-center gap-2 group/btn">
                  {t('portfolio.details')}
                  <div className="w-8 h-0.5 bg-slate-900 group-hover/btn:w-12 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
