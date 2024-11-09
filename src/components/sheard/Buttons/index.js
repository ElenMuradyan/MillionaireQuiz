import { Button, Flex, } from "antd"
import { useSelector, useDispatch } from "react-redux";
import { changeFifty, changeFiftyClicked, setChangeQuestionClicked, setTrueAnswer } from '../../../state_management/slice/helperButtonsSlice'
import { changeSubmit, changeQuestionIndex } from "../../../state_management/slice/gameSlice";

import './index.css';

const Buttons = () => {
    const dispatch = useDispatch();
    const { language } = useSelector(store => store.LanguageSlice);
    const { fifty_fifty_clicked, changeQuestionClicked, trueAnswer } = useSelector(store => store.HelperButtonsSlice);
    const { questions, submit, questionIndex } = useSelector(store => store.GameSlice);

    const handleFiftyFifty = () => {
        const currentQuestion = questions[questionIndex];
        let trueAnswers = currentQuestion.answers.filter(answer => answer.isCorrect);
        let wrongAnswers = currentQuestion.answers.filter(answer => !answer.isCorrect);
        dispatch(changeFifty(wrongAnswers.slice(0,1).concat(trueAnswers)));
        dispatch(changeFiftyClicked(true));
    };

    const handleQuestionChange = () => {
        dispatch(setChangeQuestionClicked(true));
        dispatch(changeQuestionIndex());
    };

    const handleTrueAnswer = () => {
        const currentQuestion = questions[questionIndex];
        let trueAnswers = currentQuestion.answers.filter(answer => answer.isCorrect);
        dispatch(setTrueAnswer(true));
        dispatch(changeFifty(trueAnswers))
    }

    const handleContinue = () => {
        dispatch(changeQuestionIndex());
        dispatch(changeSubmit(false));
        dispatch(changeFifty(questions[questionIndex].answers));
    }

    return(<Flex vertical gap={10} className="buttons">
        <Flex gap={20} style={{width:'50%'}}>
        <Button disabled={fifty_fifty_clicked || submit} onClick={handleFiftyFifty}>50/50</Button>
        <Button style={{textAlign:'center',textWrap:'wrap',padding:20}} disabled={changeQuestionClicked || submit} onClick={handleQuestionChange}>{language === 'en' ? 'Change Question' : 'Փոխել հարցը'}</Button>
        <Button style={{textAlign:'center',textWrap:'wrap',padding:20}} disabled={trueAnswer || submit} onClick={handleTrueAnswer}>{language === 'en' ? 'Change Question' : 'Ճիշտ պատասխան'}</Button>
        </Flex>
        <Button type="primary" style={{display: submit ? 'block' : 'none'}} onClick={() => handleContinue()}>{language === 'en' ? 'Continue' : 'Շարունակել'}</Button>  
        </Flex>  
        )
}

export default Buttons;