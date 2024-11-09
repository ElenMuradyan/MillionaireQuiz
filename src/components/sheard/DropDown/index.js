import { Avatar, Dropdown, Typography, Flex, theme } from "antd";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../../services/firebase'
import { ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../context/authContextProvider";
import { useContext, useEffect, useState } from "react";
import { getUserCoins } from "../../../core/functions/sendDataToBackend";
import { useLocation } from "react-router-dom";
import './index.css';
const { Text } = Typography;
const { useToken } = theme; 

const DropDown = () => {
    const { userProfileInfo, setIsAuth } = useContext(AuthContext);
    const [ isinMain, setIsInMine ] = useState(false);
    const location = useLocation();
    const { submit } = useSelector(store => store.GameSlice);
    const { language } = useSelector(store => store.LanguageSlice);
    const [coins, setCoins] = useState(0);
    const { token } = useToken();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setIsAuth(false);
        }catch(e){
            console.log(e, 'signout error')
        }
    };

    const items = [
       !isinMain && {
            label:language === 'en' ? 'Cancel The Current Game' : 'Դադարեցնել ներկայիս խաղը',
            key:'0',
            onClick:() => navigate(ROUTE_CONSTANTS.GAMESTART)
        },
        {
            label:language === 'en' ? 'Logout' : 'Դուրս գալ',
            key:'logout',
            onClick:handleSignOut,
        }
    ]

    useEffect(()=>{
        setIsInMine(location.pathname === '/cabinet/gamestart');
    }, [location.pathname])

    const getFullNameLetter = ({firstName, lastName}) => {
        if(firstName && lastName){
        return `${firstName[0]} ${lastName[0]}`;
        }
        return '-';
    }

    useEffect(() => {
        const fetchedCoins = async () => {
            try{
                const userCoins = await getUserCoins(userProfileInfo.uid);
                setCoins(userCoins);
            }catch(error){
                console.error(error)
            }
        }
        fetchedCoins();
    },[submit])

    return (
        <Dropdown 
        menu={{ items }} 
        trigger={['click']}
        dropdownRender={(menu) => {
            return(
                <div style={{
                    borderRadius: token.borderRadiusLG,
                    backgroundColor:'rgba(0, 0, 0, 0.739)',
                    boxShadow: 'rgb(255, 230, 0) 3px 3px 6px 0px inset, rgb(31, 1, 255) -3px -3px 6px 1px inset',    
                    padding:token.sizeMS,
                    width:250,
                  }}
                  >
                    <Flex vertical align="center" style={{padding:token.sizeMS}} className="profile_dropdown_container">
                        <Text style={{color:'white'}}>{userProfileInfo.firstName} {userProfileInfo.lastName}</Text>
                        <Text type="secondary" underline style={{color:'white'}}>{userProfileInfo.email}</Text>
                        <Text style={{color:'white'}}>{language === 'en' ? 'Your Coins' : 'Ձեր միավորները'}:{coins}</Text>
                    </Flex>
                    {menu}
                </div>
            )
        }}
        >
            <Avatar size={"large"} className="user_profile_avatar">
                { getFullNameLetter(userProfileInfo) }
            </Avatar>
        </Dropdown>
    );
};

export default DropDown;