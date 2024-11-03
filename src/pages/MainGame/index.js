import { randomQuestionsIndexes } from "../../core/functions/game";
import { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addCoins, renderCoins, createQuestions, changeModalOpen, changeSubmit, changeQuestionIndex } from "../../state_management/slice/gameSlice";
import DefeatModal from "../../components/sheard/DefeatModal";
const { Title } = Typography;

const MainGame = () => {
    const { coins, questions, modalOpen, submit, questionIndex } = useSelector(store => store.GameSlice);
    const dispatch = useDispatch();
    console.log(questionIndex)

    const handleSubmit = (correct) => {
        dispatch(changeSubmit(true));
        if(correct){
            dispatch(addCoins());
        }else{
            dispatch(changeModalOpen(true));    
    }};

    useEffect(()=>{
        dispatch(renderCoins());
        dispatch(createQuestions(randomQuestionsIndexes()));
    },[dispatch]);

    if (!questions || questions.length === 0) {
        return <Title level={5}>Loading questions...</Title>;
    }

    return (<div>
        <Title level={5}>{questions[questionIndex].question}</Title> 
        {coins}
        <ul>
            {questions[questionIndex].answers.map((answer, idx) => {
                return(<li 
                style={{backgroundColor: submit ? (answer.isCorrect ? 'green' : 'red') : 'white'}} 
                onClick={() =>!submit && handleSubmit(answer.isCorrect)} key={idx}>
                    <Title level={5}>{answer.answer}</Title>            
                </li>)
            })}
        </ul>              
        <Button type="primary" disabled={!submit} onClick={() => {dispatch(changeQuestionIndex());dispatch(changeSubmit(false))}}>Continue</Button> 
        <DefeatModal open={modalOpen} onCancel={() => dispatch(changeModalOpen(false))}/>
    </div>)
}

export default MainGame;