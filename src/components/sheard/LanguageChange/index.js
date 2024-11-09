import { useSelector, useDispatch } from "react-redux"
import { langFlags } from "../../../core/utilis/constants"
import { Avatar } from "antd";
import { changeLanguage } from "../../../state_management/slice/LanguageSlice";

const LanguageChange = () => {
    const { language } = useSelector(store => store.LanguageSlice);
    const dispatch = useDispatch();
   
    const handleChangeLanguage = () => {
        const newLanguage = language === 'en' ? 'hy' : 'en';
        dispatch(changeLanguage(newLanguage));
    }
    return(
            <Avatar size={"large"} src={langFlags[language]} alt={language} onClick={handleChangeLanguage}/>
    )
}

export default LanguageChange;