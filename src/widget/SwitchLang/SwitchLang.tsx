import { useTranslation } from 'react-i18next';
import cls from './switchLang.module.scss';

const SwitchLang = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage?.startsWith('ru') ? 'ru' : 'en';
    const nextLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

    const changeLanguage = async () => {
        await i18n.changeLanguage(nextLanguage);
        document.documentElement.lang = nextLanguage;
    };

    return (
        <button
            type="button"
            className={cls.lang}
            onClick={changeLanguage}
            aria-label={`${nextLanguage.toUpperCase()} — ${currentLanguage === 'ru' ? 'switch language to English' : 'переключить язык на русский'}`}
        >
            {nextLanguage.toUpperCase()}
        </button>
    );
};

export default SwitchLang;
