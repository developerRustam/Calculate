
import { useState } from 'react';
import cls from './listAttributes.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch, editProgress } from '../../../store/store';
import { useTranslation } from 'react-i18next';
import React from 'react';
interface Attribute {
    id: number; checked: boolean; label: string
}
interface ListAttributesProps {
  attributes: Attribute[],
  setAttributes: (value:any) => void
} 
const ListAttributes = ({attributes, setAttributes}:ListAttributesProps) => {
      const { t, i18n } = useTranslation();
      const dispatch = useDispatch<AppDispatch>();

      const handleCheckboxChange = (id:number) => {
        const updatedAttributes = attributes.map(attribute => {
          if (attribute.id === id) {

            if(!attribute.checked) {
              dispatch(editProgress(25))
            }else {
              dispatch(editProgress(-25))
            }
            
            return { ...attribute, checked: !attribute.checked };
          }
          return attribute;
        });
        setAttributes(updatedAttributes);
      };
    return (
        <ul className={cls.form__attributes} data-testid="sidebar">
            {attributes.map((attribute) => (
                <li key={attribute.id} className={cls.form__attribute}>
                <input 
                    type="checkbox" 
                    className={cls.form__checkbox} 
                    checked={attribute.checked} 
                    onChange={() => handleCheckboxChange(attribute.id)} 
                    id={`checkbox-${attribute.id}`}
                    aria-label={t(attribute.label)}
                />
                <label htmlFor={`checkbox-${attribute.id}`} className={cls.form__checkboxFake}></label>
                <span className="form__att_text">{t(attribute.label)}</span>
                </li>
            ))}
        </ul>
    )
}

export default ListAttributes;