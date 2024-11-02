import { randomQuestionsIndexes } from "../../core/functions/game";
import { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import Loading from "../../components/sheard/Loading";
import { ROUTE_CONSTANTS } from "../../core/utilis/constants";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const MainGame = () => {
    const navigate = useNavigate();
    const [ count, setCount ] = useState(0);
    const [ submit, setSubmit ] = useState(false);
    const [ questions, setQuestions ] = useState([]);

    const handleSubmit = (correct) => {
        setSubmit(true);
    if(correct){

    }else{
        alert('You didnt win');
    }
    };

    useEffect(()=>{
    setQuestions(randomQuestionsIndexes);
    },[])

    useEffect(()=>{
console.log(questions[count],count,questions)
    },[count]);

 if (count >= questions.length) {
       navigate(ROUTE_CONSTANTS.GAMEEND);
       return count;
    }

    return (<div>
        <Title level={5}>{questions[count].question}</Title>  
        <ul>
            {questions[count].answers.map((answer, idx) => {
                return(<li 
                style={{backgroundColor: submit ? (answer.isCorrect ? 'green' : 'red') : 'white'}} 
                onClick={() =>!submit && handleSubmit(answer.isCorrect)} key={idx}>
                    <Title level={5}>{answer.answer}</Title>            
                </li>)
            })}
        </ul>        
        <Button onClick={() => {setCount(count+1);setSubmit(false)}}></Button> 
    </div>)
}

export default MainGame;