import { useSelector } from "react-redux";
import { moneyArray } from "../../../core/utilis/constants";

import './index.css';

const MoneyScore = () => {
    const { coins } = useSelector(store => store.GameSlice);
return(<div className="score_container">
    <ul>
        {moneyArray.map((score, idx) => {
            return(
                <li style={{backgroundColor: ( idx === coins-1 || idx < coins-1 ) ? (score.state ? 'rgb(255, 230, 0)' : 'rgb(31, 1, 255)')  : 'rgba(0, 0, 0, 0.739)'}} key={idx}>
                    {score.value}
                </li>
            )
        })}
    </ul>
</div>)
};

export default MoneyScore;