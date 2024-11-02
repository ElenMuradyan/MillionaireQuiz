import { Button, Flex, Form, Input, notification } from "antd"
import { FIRESTORE_PATH_NAMES, regexpValidation, ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

const Register = () => {
    const [ form ] = Form.useForm(); 
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async values => {
        const { firstName, lastName, email, password } = values;
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword( auth, email, password);
            const { uid } = response.user;
            const createDoc = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
            await setDoc(createDoc, {
                uid, firstName, lastName, email
            });

            form.resetFields();
            navigate(ROUTE_CONSTANTS.LOGIN);
        }catch{
            notification.error({
                message: 'Invalid Register Credentials'
            })
        }finally{
            setLoading(false);
        }
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
        <Button type="primary" htmlType="submit" loading={loading}>Sign up</Button>
        <span>Already have an account?</span><Link to={ROUTE_CONSTANTS.LOGIN}>Sign in</Link>
        </Form>
    </Flex>)
}
export default Register;