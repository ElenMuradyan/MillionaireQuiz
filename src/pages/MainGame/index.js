import { useContext, useEffect } from "react";
import { Typography, Flex } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addCoins, changeModalOpen, changeSubmit, setChoosenAnswer } from "../../state_management/slice/gameSlice";
import { changeFifty } from "../../state_management/slice/helperButtonsSlice"
import DefeatModal from "../../components/sheard/DefeatModal";
import { sendEmail } from "../../core/functions/emailLetter";
import MoneyScore from "../../components/sheard/MoneyScore";
import './index.css';
import { AuthContext } from "../../context/authContextProvider";
import Buttons from "../../components/sheard/Buttons";
import { addQuestion } from "../../core/functions/sendDataToBackend";
import { getTrueAnswer } from "../../core/functions/getTrueAnswer";

const { Title } = Typography;

const MainGame = () => {
    const { coins, questions, modalOpen, submit, questionIndex, quizId, choosenAnswer } = useSelector(store => store.GameSlice);
    const { fifty_fifty } = useSelector(store => store.HelperButtonsSlice);
    const { userProfileInfo } = useContext(AuthContext);
    const dispatch = useDispatch();

    const handleSubmit = (correct) => {
        dispatch(changeSubmit(true));
        if(correct){
            dispatch(addCoins());
            addQuestion(userProfileInfo.uid, questions[questionIndex].question, getTrueAnswer(fifty_fifty), quizId, coins, true);
        }else{
            addQuestion(userProfileInfo.uid, questions[questionIndex].question, fifty_fifty[choosenAnswer], quizId);
            dispatch(changeModalOpen(true));  
            sendEmail(userProfileInfo.email, coins);
    }
    };

    useEffect(() => {
        if(questions[questionIndex]){        
            dispatch(changeFifty(questions[questionIndex].answers));
    }
    },[questions, questionIndex, dispatch]);

    if (!questions || questions.length === 0 || !fifty_fifty) {
        return <Title level={5}>Loading questions...</Title>
    };

    if(coins === 11){
        dispatch(changeModalOpen(true));
        sendEmail(userProfileInfo.email, coins);
    }

    return (<Flex align="center" justify='center' className="game_container" gap={20}> 
        <Flex className='Title_Container' align="center" justify="center">
        <Title level={4} style={{color:'white'}}>{questions[questionIndex].question}</Title> 
        </Flex>
        <div className='Ul_Container'>
        <Flex gap={10} vertical>
        <ul className="questions">
            {
           Array.isArray(fifty_fifty) && fifty_fifty.map((answer, idx) => {
                return(
                <li 
                style={{backgroundColor: submit ? (answer.isCorrect ? 'green' : 'red') : 'rgba(0, 0, 0, 0.739)'}} 
                onClick={() => {!submit && handleSubmit(answer.isCorrect);
                dispatch(setChoosenAnswer(idx))}}
                key={idx}>
                    <Title level={5} style={{color:'white'}}>{answer.answer}</Title>  
                </li>)
            })}
        </ul>
        <Buttons/>
        </Flex>
        </div>
        <MoneyScore/>
        <DefeatModal open={modalOpen} onCancel={() => dispatch(changeModalOpen(false))}/>   
        </Flex>
    )
}

export default MainGame;