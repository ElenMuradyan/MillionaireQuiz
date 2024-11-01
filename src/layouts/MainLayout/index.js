import { Flex } from "antd"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return(
        <Flex>
            <Outlet></Outlet>
        </Flex>
    )
}

export default MainLayout;