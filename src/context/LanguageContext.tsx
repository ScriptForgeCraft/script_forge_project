import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'am' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, Record<string, any>> = {
  am: {
    nav: {
      services: 'Ծառայություններ',
      process: 'Գործընթաց',
      portfolio: 'Պորտֆոլիո',
      pricing: 'Գներ',
      contact: 'Կապ',
      startProject: 'Սկսել նախագիծը',
    },
    hero: {
      badge: 'Հասանելի է նոր նախագծերի համար',
      title: 'Մենք կառուցում ենք ձեր բիզնեսի <span class="text-indigo-600">թվային ապագան</span>:',
      subtitle: 'Անհատական վեբ և մոբայլ լուծումներ, որոնք հզորացնում են ձեր բրենդը և օպտիմալացնում ձեր գործընթացները: Ժամանակակից, արագ և մասշտաբային:',
      ctaPrimary: 'Անվճար խորհրդատվություն',
      ctaSecondary: 'Տեսնել մեր աշխատանքները',
      features: ['100% հաճախորդների գոհունակություն', 'Պրեմիում որակ', 'Աջակցություն և սպասարկում'],
    },
    services: {
      tag: 'Մեր ծառայությունները',
      title: 'Ինչ կարող ենք անել ձեզ համար',
      subtitle: 'Մենք առաջարկում ենք ամբողջական թվային լուծումներ, որոնք առաջ են մղում ձեր բիզնեսը: Առաջին գաղափարից մինչև պատրաստի արտադրանք:',
      items: [
        {
          title: 'Վեբ կայքեր',
          desc: 'Landing էջերից մինչև բարդ կորպորատիվ կայքեր: Մենք ստեղծում ենք կայքեր, որոնք վաճառում են:',
          list: ['Landing էջեր', 'Կորպորատիվ կայքեր', 'Բիզնես պորտալներ'],
        },
        {
          title: 'Էլեկտրոնային առևտուր',
          desc: 'Հզոր առցանց խանութներ, որոնք առավելագույնի են հասցնում ձեր վաճառքը և հիացնում ձեր հաճախորդներին:',
          list: ['Shopify և WooCommerce', 'Անհատական խանութներ', 'Վճարային համակարգեր'],
        },
        {
          title: 'Վեբ հավելվածներ',
          desc: 'Անհատական ծրագրային լուծումներ բրաուզերում: Մասշտաբային, անվտանգ և հարմարեցված ձեր գործընթացներին:',
          list: ['SaaS լուծումներ', 'Ներքին վահանակներ', 'CRM և ERP համակարգեր'],
        },
        {
          title: 'Մոբայլ հավելվածներ',
          desc: 'Նեյթիվ և Cross-Platform հավելվածներ iOS-ի և Android-ի համար: Բարձրակարգ UX շարժման մեջ:',
          list: ['iOS և Android', 'React Native / Flutter', 'App Store օպտիմալացում'],
        },
        {
          title: 'Ռեդիզայն և SEO',
          desc: 'Մենք արդիականացնում ենք ձեր գոյություն ունեցող կայքը և ապահովում բարձր դիրքեր Google-ում:',
          list: ['Ժամանակակից UI/UX դիզայն', 'Արագագործության օպտիմալացում', 'SEO ռազմավարություն'],
        },
        {
          title: 'Սպասարկում և աջակցություն',
          desc: 'Մենք ձեզ մենակ չենք թողնում: Շարունակական թարմացումներ և տեխնիկական աջակցություն ձեր անվտանգության համար:',
          list: ['Անվտանգության թարմացումներ', 'Հոսթինգի կառավարում', 'Տեխնիկական աջակցություն'],
        },
      ],
    },
    process: {
      tag: 'Գործընթացը',
      title: 'Ինչպես ենք մենք համագործակցում',
      subtitle: 'Կառուցվածքային մոտեցումը երաշխավորում է ձեր նախագծի հաջողությունը: Մենք ձեզ տեղյակ ենք պահում յուրաքանչյուր քայլի մասին:',
      steps: [
        { title: 'Խորհրդատվություն', desc: 'Մենք քննարկում ենք ձեր նպատակները և պահանջները՝ կատարյալ լուծում գտնելու համար:' },
        { title: 'Կոնցեպտ և Դիզայն', desc: 'Մենք ստեղծում ենք նախնական էսքիզներ և ժամանակակից UI դիզայն:' },
        { title: 'Մշակում', desc: 'Մեր մասնագետները ծրագրավորում են ձեր լուծումը ժամանակակից տեխնոլոգիաներով:' },
        { title: 'Մեկնարկ և Աջակցություն', desc: 'Թեստավորումից հետո ձեր նախագիծը մեկնարկում է: Մենք շարունակում ենք աջակցել ձեզ:' },
      ],
      ctaTitle: 'Պատրա՞ստ եք հաջորդ քայլին:',
      ctaDesc: 'Եկեք միասին քննարկենք ձեր նախագիծը: Մենք առաջարկում ենք անվճար առաջին խորհրդատվություն:',
      ctaBtn: 'Հարցում ուղարկել',
    },
    portfolio: {
      tag: 'Պորտֆոլիո',
      title: 'Մեր վերջին նախագծերը',
      subtitle: 'Մենք հպարտ ենք մեր հաճախորդների համար կատարած աշխատանքով: Ահա մեր վերջին հաջողությունների մի քանի օրինակ:',
      viewAll: 'Տեսնել բոլոր նախագծերը',
      details: 'Տեսնել մանրամասները',
    },
    pricing: {
      tag: 'Գներ',
      title: 'Թափանցիկ փաթեթներ',
      subtitle: 'Մենք առաջարկում ենք արդար գներ բարձր որակի համար: Ընտրեք ձեր պահանջներին համապատասխան փաթեթը:',
      categories: ['Վեբ կայքեր', 'Էլեկտրոնային առևտուր և հավելվածներ'],
      request: 'Հարցում',
      redesign: 'Կայքի ռեդիզայն',
      redesignDesc: '$800-ից – Մենք թարմացնում ենք ձեր հին կայքը:',
      maintenance: 'Սպասարկում և Հոսթինգ',
      maintenanceDesc: '$100 / ամիս – Ձեր կայքի անխափան աշխատանքը:',
      seo: 'SEO օպտիմալացում',
      seoDesc: '$500-ից – Ավելի լավ տեսանելիություն ձեր բիզնեսի համար:',
    },
    testimonials: {
      tag: 'Կարծիքներ',
      title: 'Ինչ են ասում մեր հաճախորդները',
    },
    contact: {
      tag: 'Կապ',
      title: 'Եկեք քննարկենք ձեր նախագիծը',
      subtitle: 'Ունե՞ք գաղափար կամ կոնկրետ նախագիծ: Մենք սպասում ենք ձեր նամակին՝ միասին լուծում գտնելու համար:',
      email: 'Էլ. փոստ',
      phone: 'Հեռախոս',
      office: 'Գրասենյակ',
      form: {
        name: 'Անուն',
        email: 'Էլ. փոստ',
        interest: 'Հետաքրքրություն',
        message: 'Հաղորդագրություն',
        send: 'Ուղարկել հաղորդագրությունը',
        placeholderName: 'Ձեր անունը',
        placeholderEmail: 'ձեր@էլփոստ.հայ',
        placeholderMsg: 'Պատմեք մեզ ձեր նախագծի մասին...',
        interestOther: 'Այլ',
      },
    },
    footer: {
      desc: 'Մենք ժամանակակից ծրագրային ապահովման մշակման ձեր փորձագետներն ենք: Մենք գաղափարները վերածում ենք թվային գերազանցության:',
      services: 'Ծառայություններ',
      company: 'Ընկերություն',
      legal: 'Իրավական',
      rights: 'Բոլոր իրավունքները պաշտպանված են:',
    },
  },
  ru: {
    nav: {
      services: 'Услуги',
      process: 'Процесс',
      portfolio: 'Портфолио',
      pricing: 'Цены',
      contact: 'Контакт',
      startProject: 'Начать проект',
    },
    hero: {
      badge: 'Доступны для новых проектов',
      title: 'Мы строим <span class="text-indigo-600">цифровое будущее</span> вашего бизнеса.',
      subtitle: 'Индивидуальные веб- и мобильные решения, которые укрепляют ваш бренд и оптимизируют процессы. Современные, быстрые и масштабируемые.',
      ctaPrimary: 'Бесплатная консультация',
      ctaSecondary: 'Посмотреть наши работы',
      features: ['100% удовлетворенность клиентов', 'Премиум качество', 'Поддержка и обслуживание'],
    },
    services: {
      tag: 'Наши услуги',
      title: 'Что мы можем для вас сделать',
      subtitle: 'Мы предлагаем комплексные цифровые решения, которые продвигают ваш бизнес вперед. От первой идеи до готового продукта.',
      items: [
        {
          title: 'Веб-сайты',
          desc: 'От лендингов до сложных корпоративных сайтов. Мы создаем сайты, которые конвертируют.',
          list: ['Лендинги', 'Корпоративные сайты', 'Бизнес-порталы'],
        },
        {
          title: 'Электронная коммерция',
          desc: 'Мощные интернет-магазины, которые максимизируют ваши продажи и радуют клиентов.',
          list: ['Shopify и WooCommerce', 'Индивидуальные магазины', 'Платежные системы'],
        },
        {
          title: 'Веб-приложения',
          desc: 'Индивидуальные программные решения в браузере. Масштабируемые, безопасные и адаптированные под ваши процессы.',
          list: ['SaaS решения', 'Внутренние панели', 'CRM и ERP системы'],
        },
        {
          title: 'Мобильные приложения',
          desc: 'Нативные и кроссплатформенные приложения для iOS и Android. Первоклассный UX в движении.',
          list: ['iOS и Android', 'React Native / Flutter', 'Оптимизация в App Store'],
        },
        {
          title: 'Редизайн и SEO',
          desc: 'Мы модернизируем ваш существующий сайт и обеспечиваем высокие позиции в Google.',
          list: ['Современный UI/UX дизайн', 'Оптимизация производительности', 'SEO стратегия'],
        },
        {
          title: 'Обслуживание и поддержка',
          desc: 'Мы не оставляем вас одних. Постоянные обновления и техническая поддержка для вашей безопасности.',
          list: ['Обновления безопасности', 'Управление хостингом', 'Техническая поддержка'],
        },
      ],
    },
    process: {
      tag: 'Процесс',
      title: 'Как мы работаем',
      subtitle: 'Структурированный подход гарантирует успех вашего проекта. Мы держим вас в курсе каждого шага.',
      steps: [
        { title: 'Консультация', desc: 'Мы обсуждаем ваши цели и требования, чтобы найти идеальное решение.' },
        { title: 'Концепция и Дизайн', desc: 'Мы создаем прототипы и современный UI-дизайн.' },
        { title: 'Разработка', desc: 'Наши эксперты программируют ваше решение на современных технологиях.' },
        { title: 'Запуск и Поддержка', desc: 'После тестирования ваш проект запускается. Мы продолжаем поддерживать вас.' },
      ],
      ctaTitle: 'Готовы к следующему шагу?',
      ctaDesc: 'Давайте обсудим ваш проект вместе. Мы предлагаем бесплатную первую консультацию.',
      ctaBtn: 'Отправить запрос',
    },
    portfolio: {
      tag: 'Портфолио',
      title: 'Наши последние проекты',
      subtitle: 'Мы гордимся работой, которую делаем для наших клиентов. Вот несколько примеров наших последних успехов.',
      viewAll: 'Посмотреть все проекты',
      details: 'Посмотреть детали',
    },
    pricing: {
      tag: 'Цены',
      title: 'Прозрачные пакеты',
      subtitle: 'Мы предлагаем честные цены за первоклассное качество. Выберите пакет, соответствующий вашим требованиям.',
      categories: ['Веб-сайты', 'Электронная коммерция и приложения'],
      request: 'Запросить',
      redesign: 'Редизайн сайта',
      redesignDesc: 'от $800 – Мы обновим ваш старый сайт.',
      maintenance: 'Обслуживание и Хостинг',
      maintenanceDesc: '$100 / месяц – Бесперебойная работа вашего сайта.',
      seo: 'SEO оптимизация',
      seoDesc: 'от $500 – Лучшая видимость для вашего бизнеса.',
    },
    testimonials: {
      tag: 'Отзывы',
      title: 'Что говорят наши клиенты',
    },
    contact: {
      tag: 'Контакт',
      title: 'Давайте обсудим ваш проект',
      subtitle: 'У вас есть идея или конкретный проект? Мы ждем вашего сообщения, чтобы вместе найти решение.',
      email: 'E-Mail',
      phone: 'Телефон',
      office: 'Офис',
      form: {
        name: 'Имя',
        email: 'E-Mail',
        interest: 'Интерес',
        message: 'Сообщение',
        send: 'Отправить сообщение',
        placeholderName: 'Ваше имя',
        placeholderEmail: 'ваша@почта.рф',
        placeholderMsg: 'Расскажите нам о вашем проекте...',
        interestOther: 'Другое',
      },
    },
    footer: {
      desc: 'Мы ваши эксперты в современной разработке ПО. Мы превращаем идеи в цифровое превосходство.',
      services: 'Услуги',
      company: 'Компания',
      legal: 'Юридическая информация',
      rights: 'Все права защищены.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      contact: 'Contact',
      startProject: 'Start Project',
    },
    hero: {
      badge: 'Available for new projects',
      title: 'We build the <span class="text-indigo-600">digital future</span> of your business.',
      subtitle: 'Custom web and mobile solutions that strengthen your brand and optimize your processes. Modern, fast, and scalable.',
      ctaPrimary: 'Free Consultation',
      ctaSecondary: 'View Our Work',
      features: ['100% Customer Satisfaction', 'Premium Quality', 'Support & Maintenance'],
    },
    services: {
      tag: 'Our Services',
      title: 'What we can do for you',
      subtitle: 'We offer holistic digital solutions that drive your business forward. From the first idea to the finished product.',
      items: [
        {
          title: 'Websites',
          desc: 'From landing pages to complex corporate websites. We create websites that convert.',
          list: ['Landing Pages', 'Corporate Websites', 'Business Portals'],
        },
        {
          title: 'E-Commerce',
          desc: 'Powerful online shops that maximize your sales and delight your customers.',
          list: ['Shopify & WooCommerce', 'Custom Shop Systems', 'Payment Integrations'],
        },
        {
          title: 'Web Applications',
          desc: 'Custom software solutions in the browser. Scalable, secure, and tailored to your processes.',
          list: ['SaaS Solutions', 'Internal Dashboards', 'CRM & ERP Systems'],
        },
        {
          title: 'Mobile Apps',
          desc: 'Native and cross-platform apps for iOS and Android. First-class UX on the go.',
          list: ['iOS & Android', 'React Native / Flutter', 'App Store Optimization'],
        },
        {
          title: 'Redesign & SEO',
          desc: 'We modernize your existing presence and ensure top rankings on Google.',
          list: ['Modern UI/UX Design', 'Performance Optimization', 'SEO Strategy'],
        },
        {
          title: 'Maintenance & Support',
          desc: 'We don\'t leave you alone. Continuous updates and technical support for your security.',
          list: ['Security Updates', 'Hosting Management', 'Technical Support'],
        },
      ],
    },
    process: {
      tag: 'Process',
      title: 'How we work',
      subtitle: 'A structured workflow guarantees the success of your project. We keep you informed at every step.',
      steps: [
        { title: 'Consultation', desc: 'We discuss your goals and requirements to find the perfect solution.' },
        { title: 'Concept & Design', desc: 'We create wireframes and modern UI designs.' },
        { title: 'Development', desc: 'Our experts program your solution with modern technologies.' },
        { title: 'Launch & Support', desc: 'After intensive testing, your project goes live. We continue to support you.' },
      ],
      ctaTitle: 'Ready for the next step?',
      ctaDesc: 'Let\'s discuss your project together. We offer a free initial consultation.',
      ctaBtn: 'Request Now',
    },
    portfolio: {
      tag: 'Portfolio',
      title: 'Our Latest Projects',
      subtitle: 'We are proud of the work we do for our clients. Here are some examples of our recent successes.',
      viewAll: 'View All Projects',
      details: 'View Details',
    },
    pricing: {
      tag: 'Pricing',
      title: 'Transparent Packages',
      subtitle: 'We offer fair prices for premium quality. Choose the right package for your requirements.',
      categories: ['Websites', 'E-Commerce & Apps'],
      request: 'Request',
      redesign: 'Website Redesign',
      redesignDesc: 'from $800 – We bring your old site up to date.',
      maintenance: 'Maintenance & Hosting',
      maintenanceDesc: '$100 / month – Worry-free operation of your website.',
      seo: 'SEO Optimization',
      seoDesc: 'from $500 – Better visibility for your business.',
    },
    testimonials: {
      tag: 'Testimonials',
      title: 'What our clients say',
    },
    contact: {
      tag: 'Contact',
      title: 'Let\'s discuss your project',
      subtitle: 'Have an idea or a specific project? We look forward to hearing from you and finding a solution together.',
      email: 'Email',
      phone: 'Phone',
      office: 'Office',
      form: {
        name: 'Name',
        email: 'Email',
        interest: 'Interest',
        message: 'Message',
        send: 'Send Message',
        placeholderName: 'Your Name',
        placeholderEmail: 'your@email.com',
        placeholderMsg: 'Tell us about your project...',
        interestOther: 'Other',
      },
    },
    footer: {
      desc: 'We are your experts for modern software development. We turn ideas into digital excellence.',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      rights: 'All rights reserved.',
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('am');

  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = translations[language];
    for (const key of keys) {
      if (value && value[key]) {
        value = value[key];
      } else {
        return path;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
