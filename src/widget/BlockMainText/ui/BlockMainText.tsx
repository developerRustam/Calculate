import { useTranslation } from 'react-i18next';
import cls from './blockMainText.module.scss'
const BlockMainText = () => {
    const { t, i18n } = useTranslation();
    return (
            <div className={cls.generation_text}>
                <h2 className={cls.generation_text__header}>{t('описание.МиниЗаголовок')}</h2>
                <p className={cls.generation_text__description}>{t('описание.Текст')}</p>
            </div>
    )
}

export default BlockMainText;