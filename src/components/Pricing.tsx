import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pricingData = [
  {
    categoryKey: 'pricing.categories.0',
    plans: [
      { name: 'Landing Page', price: '1.000', features: { am: ['Ժամանակակից դիզայն', 'Responsive Layout', 'SEO օպտիմալացված', 'Կապի ձև'], ru: ['Современный дизайн', 'Адаптивный макет', 'SEO оптимизация', 'Контактная форма'], en: ['Modern Design', 'Responsive Layout', 'SEO Optimized', 'Contact Form'] } },
      { name: 'Corporate Website', price: '2.000', features: { am: ['Մինչև 10 էջ', 'Անհատական դիզայն', 'CMS ինտեգրում', 'Google Maps'], ru: ['До 10 страниц', 'Индивидуальный дизайн', 'Интеграция CMS', 'Google Maps'], en: ['Up to 10 Pages', 'Custom Design', 'CMS Integration', 'Google Maps'] } },
      { name: 'Business Website', price: '2.200', features: { am: ['Ծավալուն բովանդակություն', 'Բլոգ համակարգ', 'Բազմալեզու', 'Պրեմիում աջակցություն'], ru: ['Обширный контент', 'Система блогов', 'Многоязычность', 'Премиум поддержка'], en: ['Extensive Content', 'Blog System', 'Multilingual', 'Premium Support'] } },
    ],
  },
  {
    categoryKey: 'pricing.categories.1',
    plans: [
      { name: 'Online Shop', price: '3.000 - 5.000', features: { am: ['Shopify / WooCommerce', 'Վճարային համակարգեր', 'Ապրանքների կառավարում', 'Պահեստի կառավարում'], ru: ['Shopify / WooCommerce', 'Платежные системы', 'Управление товарами', 'Управление складом'], en: ['Shopify / WooCommerce', 'Payment Systems', 'Product Management', 'Inventory Management'] } },
      { name: 'Web Application', price: 'from 3.000', features: { am: ['Անհատական տրամաբանություն', 'Տվյալների բազա', 'Օգտատերերի կառավարում', 'API ինտեգրում'], ru: ['Индивидуальная логика', 'База данных', 'Управление пользователями', 'Интеграция API'], en: ['Custom Logic', 'Database Connection', 'User Management', 'API Integration'] } },
      { name: 'Mobile App', price: 'from 2.500', features: { am: ['Android կամ iOS', 'Նեյթիվ արագագործություն', 'Push ծանուցումներ', 'App Store մեկնարկ'], ru: ['Android или iOS', 'Нативная производительность', 'Push-уведомления', 'Запуск в App Store'], en: ['Android or iOS', 'Native Performance', 'Push Notifications', 'App Store Release'] } },
    ],
  },
];

export default function Pricing() {
  const { t, language } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">{t('pricing.tag')}</h2>
            <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('pricing.title')}</p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          {pricingData.map((group) => (
            <div key={group.categoryKey}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-indigo-600 pl-4">
                {t(group.categoryKey)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col hover:border-indigo-200 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-sm font-medium text-slate-500">$</span>
                      <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                      {(plan.features as any)[language].map((feature: string) => (
                        <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="w-full text-center bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-600 hover:text-white transition-all"
                    >
                      {t('pricing.request')}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold text-lg mb-2">{t('pricing.redesign')}</h4>
              <p className="text-slate-400 text-sm">{t('pricing.redesignDesc')}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{t('pricing.maintenance')}</h4>
              <p className="text-slate-400 text-sm">{t('pricing.maintenanceDesc')}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{t('pricing.seo')}</h4>
              <p className="text-slate-400 text-sm">{t('pricing.seoDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
