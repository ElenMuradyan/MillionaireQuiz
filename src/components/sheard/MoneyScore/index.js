import { useSelector } from "react-redux";
import { moneyArray } from "../../../core/utilis/constants";

const MoneyScore = () => {
    const { coins } = useSelector(store => store.GameSlice);
return(<div>
    <ul>
        {moneyArray.map((score, idx) => {
            return(
                <li style={{backgroundColor: ( idx === coins-1 || idx < coins-1 ) ? (score.state ? 'yellow' : 'green')  : 'white'}} key={idx}>
                    {score.value}
                </li>
            )
        })}
    </ul>
</div>)
};

export default MoneyScore;