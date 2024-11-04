import { Outlet } from "react-router-dom";
import { Flex } from "antd";

const Cabinet = () => {
    return(<Flex justify="center" align="center" style={{width:'100%',height:'100vh'}}>
        <Outlet/>
    </Flex>
    )
}
export default Cabinet;