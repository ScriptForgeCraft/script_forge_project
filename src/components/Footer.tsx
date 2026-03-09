import { Code2, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold tracking-tight">SCRIPT FORGE</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('services.items.0.title')}</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('services.items.1.title')}</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('services.items.2.title')}</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('services.items.3.title')}</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('services.items.4.title')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.company')}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('nav.portfolio')}</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Script Forge. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
