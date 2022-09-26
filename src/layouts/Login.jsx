import React from 'react';
import { useParams } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import LoginForm from './LoginForm'
const Login = () => {

    const {type} = useParams()
    const [formType, setFormType] = React.useState(type === 'register' ? type : 'login');

    const toggleForm = () => {
        setFormType(prevState => prevState === 'register' ? 'login' : 'register')
    }
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='.col-md-6 .offset-md-3 shadow p-4'>
                    {formType === 'register' ? <>
                    <h3 className='mb-4'>Register</h3>
                    <RegisterForm/> 
                    <p>Already have account? <a onClick={toggleForm} role='button'>Sign In</a></p>
                    </> : <>
                    <h3 className='mb-4'>Login</h3>
                    <LoginForm/>
                    <p>Dont have account? <a onClick={toggleForm} role='button'>Sign Up</a></p>
                     </>}
            </div>
          </div>
        </div>
     );
}
 
export default Login;