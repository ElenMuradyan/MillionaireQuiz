import { Typography, Flex } from 'antd';
import './index.css';

const { Title } = Typography;

const Wrapper = ({ title, children }) => {
return(
<Flex align='center' justify='center' className='container'>
<Flex className='wrapper' vertical>   
        <Title className="custom-title" level={3} style={{color:'white'}}>
            { title }
        </Title>
        {children}
        </Flex>
</Flex>
)};

export default Wrapper;