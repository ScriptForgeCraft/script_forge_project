import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [MessageSquare, Lightbulb, Code, Rocket];

export default function Process() {
  const { t } = useLanguage();
  const steps = t('process.steps');

  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">{t('process.tag')}</h2>
            <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('process.title')}</p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step: any, index: number) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-indigo-50 shadow-lg flex items-center justify-center mb-8 relative z-10 group hover:border-indigo-600 transition-colors">
                    <Icon className="w-8 h-8 text-indigo-600" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-indigo-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('process.ctaTitle')}</h3>
            <p className="text-indigo-100 text-lg">
              {t('process.ctaDesc')}
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl"
          >
            {t('process.ctaBtn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
