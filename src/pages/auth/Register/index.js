import { Button, Form, Input, notification } from "antd"
import { FIRESTORE_PATH_NAMES, regexpValidation, ROUTE_CONSTANTS } from "../../../core/utilis/constants";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Wrapper from "../../../components/sheard/Wrapper";
import { useSelector } from "react-redux";

const Register = () => {
    const [ form ] = Form.useForm(); 
    const [ loading, setLoading ] = useState(false);
    const { language } = useSelector(store => store.LanguageSlice);
    const navigate = useNavigate();

    const firstNameLabel = language === 'en' ? 'First Name' : 'Անուն';
  const firstNameErrorMessage = language === 'en' ? 'Please enter your first name' : 'Խնդրում ենք մուտքագրել ձեր անունը';

  const lastNameLabel = language === 'en' ? 'Last Name' : 'Ազգնուն';
  const lastNameErrorMessage = language === 'en' ? 'Please enter your last name' : 'Խնդրում ենք մուտքագրել ձեր ազգանունը';

  const emailLabel = language === 'en' ? 'Email' : 'Էլեկտրոնային փոստ';
  const emailErrorMessage = language === 'en' ? 'Please enter your email' : 'Խնդրում ենք մուտքագրել ձեր էլ. փոստը';

  const passwordLabel = language === 'en' ? 'Password' : 'Գաղտնաբառ';
  const passwordTooltip = language === 'en' ? 'The password must contain at least 6 to 16 characters, including at least one digit and one special character (e.g., !, @, #, $, %, ^, &, *).' : 'Գաղտնաբառը պետք է պարունակի առնվազն 6-ից 16 նիշ, ներառյալ առնվազն մեկ թիվ և մեկ հատուկ նշան (օրինակ՝ !, @, #, $, %, ^, &, *)';
  const passwordErrorMessage = language === 'en' ? 'Please enter your password' : 'Խնդրում ենք մուտքագրել գաղտնաբառը';

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
            label={firstNameLabel}
            name='firstName'
            rules={[{
                required:true,
                message:firstNameErrorMessage
            }]}
            className="formItem"
            >
                <Input placeholder={firstNameLabel} type="text" className="Input"/>
            </Form.Item>
            <Form.Item
            label={lastNameLabel}
            name='lastName'
            rules={[{
                required:true,
                message:lastNameErrorMessage
            }]}
            className="formItem"
            >
                <Input placeholder={lastNameLabel} type="text" className="Input"/>
            </Form.Item>
            <Form.Item
            label={emailLabel}
            name='email'
            rules={[{
                required:true,
                message:emailErrorMessage
            }]}
            className="formItem"
            >
                <Input placeholder={emailLabel} type="email" className="Input"/>
            </Form.Item>
            <Form.Item
            label={passwordLabel}
            name='password'
            tooltip={passwordTooltip}
            rules={[{
                required:true,
                message:passwordErrorMessage
            },
            {
                pattern:regexpValidation,
                message:passwordErrorMessage
            }
            ]}
            className="formItem"
            >
                <Input.Password placeholder={passwordLabel} className="Input"/>
            </Form.Item>
        <Button size="large" type="primary" htmlType="submit" loading={loading}>{language === 'en' ? 'Sign up' : 'Գրանցվել'}</Button><br/>
        <span style={{color:'white'}}>{language === 'en' ? 'Already have an account?' : 'Արդեն հաշիվ ունեք?'}</span><Link to={ROUTE_CONSTANTS.LOGIN}>{language === 'en' ? 'Sign ip' : 'Մուտք գործել'}</Link>
        </Form>
    </Wrapper>
    )
}
export default Register;