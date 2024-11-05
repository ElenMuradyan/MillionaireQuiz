import { Button, Form, Input, notification } from "antd"
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useState } from "react";
import Wrapper from "../../../components/sheard/Wrapper";

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const [ form ] = Form.useForm();
    const [ loading, setLoading ] = useState(false);

    const handleLogin = async values => {
        setLoading(true);
        try{
            const { email, password } = values;
            await signInWithEmailAndPassword(auth, email, password);

            form.resetFields();
            setLoading(false);
            setIsAuth(true);
            navigate(ROUTE_CONSTANTS.GAMESTART);
        }catch(error){
            console.log(error);
            
            notification.error({
                message:'Invalid Login Credentials', 
            })
        }finally{
            setLoading(false);
        }
    }

    return (
        <Wrapper title='Sign In'>
             <Form layout="vertical" onFinish={handleLogin} form={form} style={{fontSize:18}}>
            <Form.Item 
            label='Email'
            name="email"
            rules={[{
                required:true,
                message:'Please enter your email'
            }]}
            className="formItem"
            >
                <Input placeholder="Email" type="email" className="Input"/>
            </Form.Item>
            <Form.Item
            label='Password'
            name='password'
            rules={[{
                required:true,
                message:'Please enter your password'
            }]}
            className="formItem"
            >
                <Input.Password placeholder="Password" className="Input"/>
            </Form.Item>
            <Button type="primary" size="large" htmlType="submit" loading={loading}>Sign In</Button><br/>
            <span style={{color:'white'}}>Don't have an account?</span><Link to={ROUTE_CONSTANTS.REGISTER}>Sign up</Link>
        </Form>
        </Wrapper>
    )
}

export default Login;