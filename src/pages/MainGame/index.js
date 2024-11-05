import { randomQuestionsIndexes } from "../../core/functions/game";
import { useEffect } from "react";
import { Button, Typography, Flex } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addCoins, renderCoins, createQuestions, changeModalOpen, changeSubmit, changeQuestionIndex } from "../../state_management/slice/gameSlice";
import { changeFifty, changeFiftyClicked, setChangeQuestionClicked, setTrueAnswer } from "../../state_management/slice/helperButtonsSlice"
import DefeatModal from "../../components/sheard/DefeatModal";
import MoneyScore from "../../components/sheard/MoneyScore";
import './index.css';

const { Title } = Typography;

const MainGame = () => {
    const { coins, questions, modalOpen, submit, questionIndex } = useSelector(store => store.GameSlice);
    const { fifty_fifty, fifty_fifty_clicked, changeQuestionClicked, trueAnswer } = useSelector(store => store.HelperButtonsSlice);
    const dispatch = useDispatch();

    const handleSubmit = (correct) => {
        dispatch(changeSubmit(true));
        if(correct){
            dispatch(addCoins());
        }else{
            dispatch(changeModalOpen(true));  
    }
};

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

    useEffect(() => {
        dispatch(renderCoins());
        dispatch(createQuestions(randomQuestionsIndexes()));
    },[dispatch]);

    useEffect(() => {
        if(questions[questionIndex]){        
            dispatch(changeFifty(questions[questionIndex].answers));
    }
    },[questions,questionIndex,dispatch]);

    if (!questions || questions.length === 0 || !fifty_fifty) {
        return <Title level={5}>Loading questions...</Title>;
    };

    if(coins === 11){
        dispatch(changeModalOpen(true));
    }

    console.log(questions)

    return (<Flex align="center" justify='center' className="game_container" gap={20}> 
        <Flex className='Title_Container' align="center" justify="center">
        <Title level={3} style={{color:'white'}}>{questions[questionIndex].question}</Title> 
        </Flex>
        <div className='Ul_Container'>
        <Flex gap={10} vertical>
        <ul className="questions">
            {
           Array.isArray(fifty_fifty) && fifty_fifty.map((answer, idx) => {
                return(
                <li 
                style={{backgroundColor: submit ? (answer.isCorrect ? 'green' : 'red') : 'rgba(0, 0, 0, 0.739)'}} 
                onClick={() =>!submit && handleSubmit(answer.isCorrect)} key={idx}>
                    <Title level={5} style={{color:'white'}}>{answer.answer}</Title>  
                </li>)
            })}
        </ul>
        <Flex vertical gap={10} className="buttons">
        <Flex gap={20} style={{width:'50%'}}>
        <Button disabled={fifty_fifty_clicked || submit} onClick={handleFiftyFifty}>50/50</Button>
        <Button disabled={changeQuestionClicked || submit} onClick={handleQuestionChange}>Change Question</Button>
        <Button disabled={trueAnswer || submit} onClick={handleTrueAnswer}>True Answer</Button>
        </Flex>
        <Button type="primary" style={{display: submit ? 'block' : 'none'}} onClick={() => handleContinue()}>Continue</Button>  
        </Flex>              
        </Flex>
        </div>
        <MoneyScore/>
        <DefeatModal open={modalOpen} onCancel={() => dispatch(changeModalOpen(false))}/>   
        </Flex>
    )
}

export default MainGame;