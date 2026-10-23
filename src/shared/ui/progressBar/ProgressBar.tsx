
import cls from './progressBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState} from '../../../store/store';
import { useTranslation } from 'react-i18next';
const ProgressBar = () => {
    const progress = useSelector((state: RootState) => state.passwords.progressBar);
    const { t, i18n } = useTranslation()
    return (
        <div className={cls.progressBar}>
            <label htmlFor="progressFill" className={cls.progressBar__label}>{t('Надёжность пароля')}</label>
            <div className={cls.progressBar__fill} id="progressFill">
            <div 
  className={cls.progressBar__overlay} 
  style={{ 
        width: `${progress}%`, 
        background: progress < 50 ? '#F44336' : (progress < 80 ? '#f4c753' : '#4CAF50') 
        }}
    ></div>
            </div>
        </div>
    )
}

export default ProgressBar;