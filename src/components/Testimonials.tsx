import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonialsData = [
  {
    name: { am: 'Միքայել Վեբեր', ru: 'Михаэль Вебер', en: 'Michael Weber' },
    role: { am: 'Տնօրեն, Weber Bau GmbH', ru: 'Директор, Weber Bau GmbH', en: 'CEO, Weber Bau GmbH' },
    content: {
      am: 'Script Forge-ը ամբողջությամբ վերափոխեց մեր ընկերության կայքը: Արդյունքը գերազանցեց մեր սպասելիքները՝ ժամանակակից, արագ, և մենք ստանում ենք զգալիորեն ավելի շատ հարցումներ:',
      ru: 'Script Forge полностью переработал сайт нашей компании. Результат превзошел наши ожидания — современно, быстро, и мы получаем значительно больше запросов.',
      en: 'Script Forge completely redesigned our company website. The result exceeded our expectations – modern, fast, and we are getting significantly more inquiries.',
    },
    avatar: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    name: { am: 'Սառա Սմիթ', ru: 'Сара Шмидт', en: 'Sarah Schmidt' },
    role: { am: 'Հիմնադիր, EcoStore', ru: 'Основатель, EcoStore', en: 'Founder, EcoStore' },
    content: {
      am: 'Մեր առցանց խանութի մշակումը անցավ հարթ: Թիմը բանիմաց է, արագ է արձագանքում և առաջարկել է հիանալի սեփական գաղափարներ:',
      ru: 'Разработка нашего интернет-магазина прошла гладко. Команда компетентна, быстро отвечает и внесла отличные собственные идеи.',
      en: 'The development of our online shop went smoothly. The team is competent, responds quickly, and brought in great ideas of their own.',
    },
    avatar: 'https://picsum.photos/seed/person2/100/100',
  },
  {
    name: { am: 'Տիգրան Մյուլլեր', ru: 'Томас Мюллер', en: 'Thomas Müller' },
    role: { am: 'ՏՏ բաժնի պետ, Logistik Pro', ru: 'IT-директор, Logistik Pro', en: 'IT Manager, Logistik Pro' },
    content: {
      am: 'Մեր ներքին վեբ հավելվածը զգալիորեն արագացրել է մեր գործընթացները: Համագործակցությունը Script Forge-ի հետ պրոֆեսիոնալ էր և նպատակաուղղված:',
      ru: 'Наше внутреннее веб-приложение значительно ускорило наши процессы. Сотрудничество с Script Forge было профессиональным и целенаправленным.',
      en: 'Our internal web application has significantly accelerated our processes. The collaboration with Script Forge was professional and goal-oriented.',
    },
    avatar: 'https://picsum.photos/seed/person3/100/100',
  },
];

export default function Testimonials() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3">{t('testimonials.tag')}</h2>
            <p className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t('testimonials.title')}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={(testimonial.name as any)[language]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-100" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed relative z-10">
                "{(testimonial.content as any)[language]}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={(testimonial.name as any)[language]}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{(testimonial.name as any)[language]}</h4>
                  <p className="text-sm text-slate-500">{(testimonial.role as any)[language]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
