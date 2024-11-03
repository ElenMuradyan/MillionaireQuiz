import { Modal, Typography, Button } from "antd";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../context/authContextProvider";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { useDispatch } from "react-redux";
import { changeMessage, render } from "../../../state_management/slice/gameSlice";
import { randomQuestionsIndexes } from "../../../core/functions/game";

const { Title } = Typography;

const DefeatModal = ({ open, onCancel }) => {
    const dispatch = useDispatch();
    const { message } = useSelector(store => store.GameSlice );
    const { firstName } = useContext(AuthContext);
    const { coins } = useSelector(store => store.GameSlice);
    const navigate = useNavigate();

    const handleDefeat = () => {
        switch(true){
            case coins<5:
                dispatch(changeMessage(`Better luck next time,${firstName}!`))
                break;
            case coins>=5 && coins<7:
                dispatch(changeMessage(`Dear ${firstName} you gained 5000$,congrats:)`))
                break;
            case coins>=7 && coins<9:
                dispatch(changeMessage(`Dear ${firstName} you gained 10000$,congrats:)`))
                break;
            case coins>=9 && coins<11:
                dispatch(changeMessage(`Dear ${firstName} you gained 15000$,congrats:)`))
                break;
            case coins>=11 && coins<13:
                dispatch(changeMessage(`Dear ${firstName} you gained 50000$,congrats:)`))
                break;    
            case coins === 14:
                dispatch(changeMessage(`Dear ${firstName} you gained 100000$,congrats:)`))
                break;
            case coins === 15:
                dispatch(changeMessage(`Dear ${firstName} you gained 250000$,congrats:)`))
                break;
            case coins === 16:
                dispatch(changeMessage(`Dear ${firstName} you gained 500000$,congrats:)`))
                break;
            case coins === 17:
                dispatch(changeMessage(`Congratulations, ${firstName}! You’ve hit the jackpot with a million coins!`));
                break;
            default:
                dispatch(changeMessage("Unexpected coin value."));
        }
    };

    useEffect(() => {
        if (open) {
            handleDefeat();
        }
    }, [open]);

    const handleClose = () => {
        navigate(ROUTE_CONSTANTS.GAMESTART);
        dispatch(render(randomQuestionsIndexes()));
    }

    return(<div>
        <Modal title='Game Over' open={open} onCancel={onCancel} footer={[
                <Button key="home" type="primary" onClick={handleClose}>Home</Button>,
        ]}>
            <Title level={3}>{message}</Title>
        </Modal>
    </div>)
}

export default DefeatModal;