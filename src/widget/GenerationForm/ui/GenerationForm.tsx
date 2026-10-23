import { useState } from "react";
import MainBtn from "../../../shared/ui/mainBtn/MainBtn";
import cls from './generationForm.module.scss'
import ListAttributes from "../../../shared/ui/ListAttributes/ListAttributes";
import BlockMainText from "../../../widget/BlockMainText";
import ResultPassword from '../../../shared/ui/ResultPassword/ResultPassword'
import generatePasswords, { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "../../../shared/lib/generationPassword";
import { useTranslation } from "react-i18next";
const GenerationForm = () => {
    const [lengthInput, setLengthInput] = useState(8);
    const [passwords, setPasswords] = useState<string[]>([]);
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const [attributes, setAttributes] = useState([
        { id: 1, checked: false, label: 'Использовать прописные буквы' },
        { id: 2, checked: false, label: 'Использовать строчные буквы' },
        { id: 3, checked: false, label: 'Использовать цифры' },
        { id: 4, checked: false, label: 'Использовать символы: %, *, ), ?, @, #, $, ~' }
      ]);
    function handlerInput(e: React.ChangeEvent<HTMLInputElement>) {
        setLengthInput(Number(e.target.value));
    }
    const handlerBtn = (e:any) => {
        e.preventDefault();
        const isValidLength = Number.isInteger(lengthInput)
            && lengthInput >= MIN_PASSWORD_LENGTH
            && lengthInput <= MAX_PASSWORD_LENGTH;

        if (!isValidLength) {
            setError(true);
            return;
        }

        setError(false);
        setPasswords(generatePasswords(
            lengthInput,
            attributes[0].checked,
            attributes[1].checked,
            attributes[2].checked,
            attributes[3].checked,
        ));
    }
    return (
        <div className={cls.form}>
            <div>
                <h1 className={cls.main_header}>{t('Заголовок')}</h1>
                <BlockMainText/>
            </div>
            <form className={cls.form} action="">
                <label htmlFor="password-length" className={cls.form__label}>{t('Длина пароля')}</label>
                <input
                    id="password-length"
                    className={cls.form__count}
                    type="number"
                    min={MIN_PASSWORD_LENGTH}
                    max={MAX_PASSWORD_LENGTH}
                    value={lengthInput}
                    aria-invalid={error}
                    aria-describedby="password-length-error"
                    onChange={handlerInput}
                />
                <div
                    id="password-length-error"
                    className={cls.form__error}
                    role={error ? 'alert' : undefined}
                    style={{height: error ? '42px' : '0px'}}
                >
                    {t('Длина пароля ошибка')}
                </div>
                <ListAttributes attributes={attributes} setAttributes={setAttributes}/>
                <ResultPassword passwords={passwords}/>
                <MainBtn theme="black" onClick={(e:any) =>{handlerBtn(e)}}/>
            </form>
        </div>
    )
}

export default GenerationForm;