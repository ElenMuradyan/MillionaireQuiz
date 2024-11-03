import { randomQuestionsIndexes } from "../../core/functions/game";
import { useEffect } from "react";
import { Button, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addCoins, renderCoins, createQuestions, changeModalOpen, changeSubmit, changeQuestionIndex, changeFifty, changeFiftyClicked, setChangeQuestionClicked, setTrueAnswer } from "../../state_management/slice/gameSlice";
import DefeatModal from "../../components/sheard/DefeatModal";
const { Title } = Typography;

const MainGame = () => {
    const { questions, modalOpen, submit, questionIndex, fifty_fifty, fifty_fifty_clicked, changeQuestionClicked, trueAnswer } = useSelector(store => store.GameSlice);
    const dispatch = useDispatch();

    const handleSubmit = (correct) => {
        dispatch(changeSubmit(true));
        if(correct){
            dispatch(addCoins());
        }else{
            dispatch(changeModalOpen(true));    
    }};

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

    useEffect(()=>{
        dispatch(renderCoins());
        dispatch(createQuestions(randomQuestionsIndexes()));
    },[dispatch]);

    useEffect(() => {
        if(questions[questionIndex]){        
            dispatch(changeFifty(questions[questionIndex].answers));
    }
    },[questions,questionIndex,dispatch])

    if (!questions || questions.length === 0 || !fifty_fifty) {
        return <Title level={5}>Loading questions...</Title>;
    }

    return (<div>
        <Title level={5}>{questions[questionIndex].question}</Title> 
        <ul>
            {
           Array.isArray(fifty_fifty) && fifty_fifty.map((answer, idx) => {
                return(
                <li 
                style={{backgroundColor: submit ? (answer.isCorrect ? 'green' : 'red') : 'white'}} 
                onClick={() =>!submit && handleSubmit(answer.isCorrect)} key={idx}>
                    <Title level={5}>{answer.answer}</Title>  
                </li>)
            })}
        </ul>              
        <Button disabled={fifty_fifty_clicked} onClick={handleFiftyFifty}>50/50</Button>
        <Button disabled={changeQuestionClicked} onClick={handleQuestionChange}>Change Question</Button>
        <Button disabled={trueAnswer} onClick={handleTrueAnswer}>True Answer</Button>
        <Button type="primary" disabled={!submit} onClick={() => {dispatch(changeQuestionIndex());dispatch(changeSubmit(false));dispatch(changeFifty(questions[questionIndex].answers))}}>Continue</Button> 
        <DefeatModal open={modalOpen} onCancel={() => dispatch(changeModalOpen(false))}/>
    </div>)
}

export default MainGame;