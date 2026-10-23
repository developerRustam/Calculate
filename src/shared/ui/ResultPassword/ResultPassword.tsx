import cls from './resultPassword.module.scss';

interface ResultPasswordProps {
    passwords: string[];
}

const ResultPassword = ({ passwords }: ResultPasswordProps) => (
    <div className={cls.result} aria-live="polite">
        {passwords.map((password, index) => (
            <div key={`${password}-${index}`} className={cls.result__password}>
                {password}
            </div>
        ))}
    </div>
);

export default ResultPassword;
