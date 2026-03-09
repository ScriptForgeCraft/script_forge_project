import { motion } from 'motion/react';
import { Globe, ShoppingCart, Smartphone, RefreshCw, Settings, Laptop } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [Globe, ShoppingCart, Laptop, Smartphone, RefreshCw, Settings];
const colors = [
  'bg-blue-50 text-blue-600',
  'bg-emerald-50 text-emerald-600',
  'bg-indigo-50 text-indigo-600',
  'bg-purple-50 text-purple-600',
  'bg-orange-50 text-orange-600',
  'bg-slate-50 text-slate-600',
];

export default function Services() {
  const { t } = useLanguage();
  const services = t('services.items');

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">{t('services.tag')}</h2>
            <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('services.title')}</p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${colors[index]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.list.map((item: string) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
