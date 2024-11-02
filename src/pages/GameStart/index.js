import { Button, Flex, Typography } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/authContextProvider";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../core/utilis/constants";

const { Title }  = Typography;

const GameStart = () => {
    const navigate = useNavigate();
    const { firstName } = useContext(AuthContext);
return(<Flex align="center" justify="center" vertical>
        <Title level={5}>Hi {firstName}.Step into the world of high-stakes trivia with the Millionaire Quiz Game! Test your knowledge across various categories, answer challenging questions, and climb the ladder to win virtual millions. With lifelines at your disposal, including Phone a Friend and Ask the Audience, strategize your way to the top. Are you ready to become a quiz millionaire? Play now and see how far your knowledge can take you!</Title> 
        <Button type="primary" onClick={()=>navigate(ROUTE_CONSTANTS.MAINGAME)}>Start</Button>
</Flex>)
};

export default GameStart;