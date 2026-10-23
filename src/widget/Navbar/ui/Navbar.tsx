import cls from './navbar.module.scss';
import logo from '../../../shared/assets/logo.png';
import avatar from '../../../shared/assets/file.webp';
import SwitchLang from '../../../widget/SwitchLang/SwitchLang';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <nav className={`${cls.nav} ${className ?? ''}`} aria-label={t('Навигация')}>
      <div className={cls.nav__wrap}>
        <img className={cls.nav__logo} src={logo} alt="Password Craft" />
        <ul className={cls.nav__items}>
          <li>
            <SwitchLang />
          </li>
          <li className={cls.avatar}>
            <img src={avatar} alt="Rustam Ganiev" className={cls.avatar__img} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
