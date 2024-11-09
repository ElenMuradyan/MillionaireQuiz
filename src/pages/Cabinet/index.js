import { Outlet } from "react-router-dom";
import { Flex } from "antd";
import Header from "../../components/global/Header";

const Cabinet = () => {
    return(<Flex style={{width:'100%',height:'100vh'}} vertical>
    <Header/>
    <Flex justify="center" align="center" style={{width:'100%',height:'100vh'}}>
        <Outlet/>
    </Flex>
    </Flex>
    )
}
export default Cabinet;