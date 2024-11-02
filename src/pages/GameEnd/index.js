import { Button, Flex, Typography } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/authContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../core/utilis/constants";
const { Title }  = Typography;

const GameEnd = () => {
    const navigate = useNavigate();
    const { firstName } = useContext(AuthContext);
return(<Flex align="center" justify="center" vertical>
        <Title level={5}>Dear {firstName} you gained 1000$.</Title> 
        <Button type="primary" onClick={()=>navigate(ROUTE_CONSTANTS.GAMESTART)}>Home</Button>
        <Button type="primary" onClick={()=>navigate(ROUTE_CONSTANTS.MAINGAME)}>Play again</Button>
</Flex>)
};

export default GameEnd;