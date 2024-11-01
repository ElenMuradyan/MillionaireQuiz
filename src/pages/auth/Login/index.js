import { Button, Form, Input } from "antd"
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utilis/constants";

const Login = () => {
    const [ form ] = Form.useForm();

    const handleLogin = () => {

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
            name='email'
            rules={[{
                required:true,
                message:'Please enter your password'
            }]}
            >
                <Input.Password placeholder="Password"/>
            </Form.Item>
            <Button type="primary" htmlType="submit">Sign In</Button>
            <span>Don't have an account?</span><Link to={ROUTE_CONSTANTS.REGISTER}>Sign up</Link>
        </Form>
    )
}

export default Login;