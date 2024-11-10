import { Modal, Typography, Button } from "antd";
import { useContext, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../context/authContextProvider";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { useDispatch } from "react-redux";
import { changeMessage, render } from "../../../state_management/slice/gameSlice";

const { Title } = Typography;

const DefeatModal = ({ open, onCancel }) => {
    const { language } = useSelector(store => store.LanguageSlice);
    const { message } = useSelector(store => store.GameSlice );
    const { coins } = useSelector(store => store.GameSlice);
    const { userProfileInfo } = useContext(AuthContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { firstName } = userProfileInfo;
    
    const handleDefeat = useCallback(() => {
        switch(true) {
            case coins < 3:
                dispatch(changeMessage(language ==='en' ? `Better luck next time, ${firstName}!` : 'Փորձիր ևս մեկ անգամ։'));
                break;
            case coins >= 3 && coins < 7:
                dispatch(changeMessage(language ==='en' ? `Dear ${firstName}, you gained 5000$, congrats :)` : `Սիրելի ${firstName} դու վաստակեցիր 5000$`));
                break;
            case coins >= 7 && coins <= 10:
                dispatch(changeMessage(language ==='en' ? `Dear ${firstName}, you gained 10000$, congrats :)` : `Սիրելի ${firstName} դու վաստակեցիր 10000$`));
                break;
            case coins === 11:
                dispatch(changeMessage(language ==='en' ? `Congratulations, ${firstName}! You’ve hit the jackpot with a million coins!` : `Շնորհավորում եմ, դուք շահեցիք միլիոնը։`));
                break;
            default:
                dispatch(changeMessage("Unexpected coin value."));
        }
    }, [coins, firstName, dispatch, language]);

    useEffect(() => {
        if (open) {
            handleDefeat();
        }
    }, [open, handleDefeat]);

    const handleClose = () => {
        navigate(ROUTE_CONSTANTS.GAMESTART);
        dispatch(render());
    }

    return(<div className="modal">
        <Modal maskClosable={false} closable={false} title='Game Over' open={open} onCancel={onCancel} footer={[
                <Button key="home" type="primary" onClick={handleClose}>Home</Button>,
        ]}>
            <Title level={3}>{message}</Title>
        </Modal>
    </div>)
}

export default DefeatModal;