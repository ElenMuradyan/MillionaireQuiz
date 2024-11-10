import { Button, Form, Input, notification } from "antd"
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useState } from "react";
import Wrapper from "../../../components/sheard/Wrapper";
import { useSelector } from "react-redux";

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const { language } = useSelector(store => store.LanguageSlice);
    const [ form ] = Form.useForm();
    const [ loading, setLoading ] = useState(false);

    const emailLabel = language === 'en' ? 'Email' : 'Էլեկտրոնային փոստ';
    const emailErrorMessage = language === 'en' ? 'Please enter your email' : 'Անհրաժեշտ է մուտքագրել էլ. փոստը';

    const passwordLabel = language === 'en' ? 'Password' : 'Գաղտնաբառ';
    const passwordErrorMessage = language === 'en' ? 'Please enter your password' : 'Անհրաժեշտ է մուտքագրել գաղտնաբառը';


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
        <Wrapper title={language === 'en' ? 'Sign In' : 'Մուտք Գործել'}>
             <Form layout="vertical" onFinish={handleLogin} form={form} style={{fontSize:18}}>
            <Form.Item 
            label={emailLabel}
            name="email"
            rules={[{
                required:true,
                message: emailErrorMessage
            }]}
            className="formItem"
            >
                <Input placeholder={emailLabel} type="email" className="Input"/>
            </Form.Item>
            <Form.Item
            label={passwordLabel}
            name='password'
            rules={[{
                required:true,
                message:passwordErrorMessage
            }]}
            className="formItem"
            >
                <Input.Password placeholder={passwordLabel} className="Input"/>
            </Form.Item>
            <Button type="primary" size="large" htmlType="submit" loading={loading}>{language==='en' ? 'Sign In' : 'Մուտք Գործել'}</Button><br/>
            <span style={{color:'white'}}>{language==='en' ? "Don't have an account?" : 'Չունեք հաշիվ?'}</span><Link to={ROUTE_CONSTANTS.REGISTER}>{language==='en' ? 'Sign up' : 'Գրանցվել'}</Link>
        </Form>
        </Wrapper>
    )
}

export default Login;