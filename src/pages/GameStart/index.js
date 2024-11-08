import { Button, Flex, Typography } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/authContextProvider";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../core/utilis/constants";
import { useDispatch } from "react-redux";
import Wrapper from "../../components/sheard/Wrapper";
import { createQuestions, render } from "../../state_management/slice/gameSlice";
import { ButtonsRender } from "../../state_management/slice/helperButtonsSlice";
import { randomQuestionsIndexes } from "../../core/functions/game";
const { Title } = Typography;

const GameStart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { firstName } = useContext(AuthContext);

    const handleStartGame = () => {
        dispatch(render());
        dispatch(ButtonsRender());
        dispatch(createQuestions(randomQuestionsIndexes()));
        
        localStorage.clear();
        navigate(ROUTE_CONSTANTS.MAINGAME);
    };

    return (
        <Wrapper>
            <Flex align="center" justify="center" vertical>
                <Title style={{ color: 'white' }}>START THE GAME</Title>
                <Title level={5} style={{ color: 'white' }}>
                    Hi {firstName}. Step into the world of high-stakes trivia with the Millionaire Quiz Game! 
                    Test your knowledge across various categories, answer challenging questions, and climb the ladder 
                    to win virtual millions. With lifelines at your disposal, including Phone a Friend and Ask the Audience, 
                    strategize your way to the top. Are you ready to become a quiz millionaire? 
                    Play now and see how far your knowledge can take you!
                </Title>
                <Button type="primary" size="large" onClick={handleStartGame}>
                    Start
                </Button>
            </Flex>
        </Wrapper>
    );
};

export default GameStart;
