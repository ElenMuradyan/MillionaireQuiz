import { Button, Form, Input, notification } from "antd"
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useState } from "react";

const Login = ({ setIsAuth }) => {
    console.log(setIsAuth)
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
        <Form layout="vertical" onFinish={handleLogin} form={form}>
            <Form.Item 
            label='Email'
            name="email"
            rules={[{
                required:true,
                message:'Please enter your email'
            }]}>
                <Input placeholder="Email" type="email"/>
            </Form.Item>
            <Form.Item
            label='Password'
            name='password'
            rules={[{
                required:true,
                message:'Please enter your password'
            }]}
            >
                <Input.Password placeholder="Password"/>
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>Sign In</Button>
            <span>Don't have an account?</span><Link to={ROUTE_CONSTANTS.REGISTER}>Sign up</Link>
        </Form>
    )
}

export default Login;