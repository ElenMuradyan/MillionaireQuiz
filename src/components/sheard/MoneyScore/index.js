import { useSelector } from "react-redux";
import { moneyArray } from "../../../core/utilis/constants";
import Typography from "antd/es/typography/Typography";
import './index.css';

const { Title } = Typography;
const MoneyScore = () => {
    const { coins } = useSelector(store => store.GameSlice);
    const { language } = useSelector(store => store.LanguageSlice);

return(<div className="score_container" >
    <Title level={2} style={{color:'white', textAlign:'center', margin: 0}}>{language === 'en' ? 'Your Score' : 'Ձեր առաջընթացը'}</Title>
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