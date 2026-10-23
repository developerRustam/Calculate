import { useTranslation } from 'react-i18next';
import cls from './alarm.module.scss'
const Alarm = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className={cls.alarm}>
            <div className={cls.alarm__text}>{t('Уведомление')}
            </div>
        </section>
    )
}

export default Alarm;