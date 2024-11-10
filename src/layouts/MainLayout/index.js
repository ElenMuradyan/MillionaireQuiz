import { Flex } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../../components/global/Header";
import { useContext } from "react";
import { AuthContext } from "../../context/authContextProvider";

const MainLayout = () => {
    const { isAuth } = useContext(AuthContext);
    return(
        <>
        {!isAuth && <Header/>}
        <Flex>
        <Outlet></Outlet>
        </Flex>
        </>
    )
}

export default MainLayout;