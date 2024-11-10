import { Button, Flex, Typography } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/authContextProvider";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../core/utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../components/sheard/Wrapper";
import { createQuestions, render } from "../../state_management/slice/gameSlice";
import { ButtonsRender } from "../../state_management/slice/helperButtonsSlice";
import { randomQuestionsIndexes } from "../../core/functions/game";
import { createQuestionDoc, cleanQuizzes } from "../../core/functions/sendDataToBackend";
import { setQuizId } from "../../state_management/slice/gameSlice";

const { Title } = Typography;

const GameStart = () => {
    const { language } = useSelector(store => store.LanguageSlice);
    const { quizId } = useSelector(store => store.GameSlice);
    const { userProfileInfo } = useContext(AuthContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleStartGame = () => {
        dispatch(render());
        dispatch(ButtonsRender());
        dispatch(createQuestions(randomQuestionsIndexes(language)));
        
        localStorage.clear();
        navigate(ROUTE_CONSTANTS.MAINGAME);
        dispatch(setQuizId());
        cleanQuizzes(userProfileInfo.uid)
        createQuestionDoc(userProfileInfo.uid, quizId);
    };

    return (
        <Wrapper>
            <Flex align="center" justify="center" vertical>
                <Title style={{ color: 'white' }}>{language === 'en' ? 'Start The Game' : 'Սկսել Խաղը'}</Title>
                <Title level={5} style={{ color: 'white' }}>
                {language === 'en' ? `Hi ${userProfileInfo.firstName || ''}. Step into the world of high-stakes trivia with the Millionaire Quiz Game! 
                    Test your knowledge across various categories, answer challenging questions, and climb the ladder 
                    to win virtual millions. With lifelines at your disposal, including Phone a Friend and Ask the Audience, 
                    strategize your way to the top. Are you ready to become a quiz millionaire? 
                    Play now and see how far your knowledge can take you!` : 
                     `Բարև ${userProfileInfo.firstName || ''} Օնլայն Միլիոնատեր Վիկտորինայի խաղում! Տվեք մի քանի հարցերի ճիշտ պատասխաններ և հաղթեք վիրտուալ միլիոններ: Կկարողանաք հաղթել և դառնալ միլիոնատեր? Աշխատեք հիմա և բացահայտեք, թե որքան հեռու կարող եք հասնել ձեր գիտելիքներով:`}
                    
                </Title>
                <Button type="primary" size="large" onClick={handleStartGame}>
                {language === 'en' ? 'Start' : 'Սկսել'}
                </Button>
            </Flex>
        </Wrapper>
    );
};

export default GameStart;
