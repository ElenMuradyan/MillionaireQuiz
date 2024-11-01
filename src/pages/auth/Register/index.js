import { Button, Flex, Form, Input } from "antd"
import { regexpValidation, ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { Link } from "react-router-dom";

const Register = () => {
    const [ form ] = Form.useForm(); 
    const handleRegister = () => {

    }

    return(<Flex>
        <Form onFinish={handleRegister} form={form} layout="vertical">
            <Form.Item
            label='First Name'
            name='firstName'
            rules={[{
                required:true,
                message:'Please enter your first name'
            }]}>
                <Input placeholder="First Name" type="text"/>
            </Form.Item>
            <Form.Item
            label='Last Name'
            name='lastName'
            rules={[{
                required:true,
                message:'Please enter your last name'
            }]}
            >
                <Input placeholder="Last Name" type="text"/>
            </Form.Item>
            <Form.Item
            label='Email'
            name='email'
            rules={[{
                required:true,
                message:'Please enter your email'
            }]}
            >
                <Input placeholder="Email" type="email"/>
            </Form.Item>
            <Form.Item
            label='Password'
            name='password'
            tooltip='The password must contain at least 6 to 16 characters, including at least one digit and one special character (e.g., !, @, #, $, %, ^, &, *).'
            rules={[{
                required:true,
                message:'Please enter your password'
            },
            {
                pattern:regexpValidation,
                message:'Wrong Password'
            }
            ]}>
                <Input.Password placeholder="Password"/>
            </Form.Item>
            <Form.Item 
            label='Confirm Passsword'
            name='confirm'
            tooltip='The password must contain at least 6 to 16 characters, including at least one digit and one special character (e.g., !, @, #, $, %, ^, &, *).'
            dependencies={['password']}
            rules={[{
                required:true,
                message:'Wrong Password'
            },
            ({getFieldValue}) => ({
                validator(_,value){
                    if(!value||value===getFieldValue('password')){
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered does not match'));
                }
            })
        ]}>
            <Input.Password placeholder="Confirm Password"/>
        </Form.Item>
        <Button type="primary" htmlType="submit">Sign up</Button>
        <span>Already have an account?</span><Link to={ROUTE_CONSTANTS.LOGIN}>Sign in</Link>
        </Form>
    </Flex>)
}
export default Register;