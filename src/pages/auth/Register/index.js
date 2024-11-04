import { Button, Form, Input, notification } from "antd"
import { FIRESTORE_PATH_NAMES, regexpValidation, ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Wrapper from "../../../components/sheard/Wrapper";

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
            navigate(ROUTE_CONSTANTS.CABINET);
        }catch{
            notification.error({
                message: 'Invalid Register Credentials'
            })
        }finally{
            setLoading(false);
        }
    }

    return(<Wrapper title={'Sign Up'}>
        <Form onFinish={handleRegister} form={form} layout="vertical" style={{fontSize:18}}>
            <Form.Item
            label='First Name'
            name='firstName'
            rules={[{
                required:true,
                message:'Please enter your first name'
            }]}
            className="formItem"
            >
                <Input placeholder="First Name" type="text" className="Input"/>
            </Form.Item>
            <Form.Item
            label='Last Name'
            name='lastName'
            rules={[{
                required:true,
                message:'Please enter your last name'
            }]}
            className="formItem"
            >
                <Input placeholder="Last Name" type="text" className="Input"/>
            </Form.Item>
            <Form.Item
            label='Email'
            name='email'
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
            tooltip='The password must contain at least 6 to 16 characters, including at least one digit and one special character (e.g., !, @, #, $, %, ^, &, *).'
            rules={[{
                required:true,
                message:'Please enter your password'
            },
            {
                pattern:regexpValidation,
                message:'Wrong Password'
            }
            ]}
            className="formItem"
            >
                <Input.Password placeholder="Password" className="Input"/>
            </Form.Item>
        <Button size="large" type="primary" htmlType="submit" loading={loading}>Sign up</Button><br/>
        <span style={{color:'white'}}>Already have an account?</span><Link to={ROUTE_CONSTANTS.LOGIN}>Sign in</Link>
        </Form>
    </Wrapper>
    )
}
export default Register;