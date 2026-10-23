import Footer from "../../../widget/Footer";
import Alarm from "../../../shared/ui/Alarm/Alarm";
import GenerationForm from "../../../widget/GenerationForm";
import ProgressBar from "../../../shared/ui/progressBar/ProgressBar";
import cls from './generationPassword.module.scss';

export const GenerationPassword = () => (
    <>
        <main className={cls.generation}>
            <div className="container">
                <div className={cls.generation_wrap}>
                    <GenerationForm />
                    <ProgressBar />
                </div>
            </div>
        </main>
        <Alarm />
        <Footer />
    </>
);
