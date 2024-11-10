import { Flex } from "antd"
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import DropDown from "../../sheard/DropDown";
import LanguageChange from "../../sheard/LanguageChange";
import { AuthContext } from "../../../context/authContextProvider";

const Header = () => {
    const location = useLocation();
    const { isAuth } = useContext(AuthContext);
    const [ isinMain, setIsInMine ] = useState(false);

    useEffect(() => {
        setIsInMine(location.pathname === '/cabinet/maingame')
    }, [location.pathname])
 
    return(<Flex style={{backgroundColor: 'rgba(0, 0, 0, 0.739)', padding:10, boxShadow: 'rgb(255, 230, 0) 3px 3px 6px 0px inset, rgb(31, 1, 255) -3px -3px 6px 1px inset'}} justify="space-between">
       {isAuth && <DropDown/>}
       {!isinMain && <LanguageChange/>}
    </Flex>)
}

export default Header;