import React from 'react';
import TextField from '../components/TextField';
import { validator } from '../utils/validate';
import RadioField from './RadioField';
import SelectField from './SelectField';
import ChoiseProfessionSelect from './ChoiseProfessionSelect';
import CheckBoxField from './CheckBoxField';

const RegisterForm = () => {

    const [data, setData] = React.useState(
        {
            email:'', 
            password:'', 
            profession: '', 
            sex: '', 
            qualities: '',
            licence: false
        });
    const [errors, setErrors] = React.useState({});

    const onChangeInput = (target) => {
        setData((prevState) => ({...prevState,[target.name]:target.value}));
    };
    
    const validatorConfig = {
        email: {
            isRequired:{
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail:{
                message: 'Email введен некорректно'
            }
        },
        password: {
            isRequired:{
                message: 'Поле пароль обязательна для заполнения'
            },
            isCapitalSymbol:{
                message: 'Пароль должен содержать хотя бы одну заглавную букву'
            },
            isContainDigit:{
                message: 'Пароль должен содержать хотя бы одно число'
            },
            min:{
                message: 'Пароль должен состоять минимум из 8 символов',
                value: 8
            }
        },
        profession:{
            isRequired:{
                message: 'Обязательно выбрать профессию'
            }
        },
        qualities:{
            isRequired:{
                message: 'Обязательно выбрать качество'
            }
        },
        licence:{
            isRequired:{
                message: 'Необходимо подтвердить лицензионное соглашение для использования нашего сервиса'
            }
        },
    };

    React.useEffect(() => {
        validate();
    }, [data])
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        const isValid = validate();
        if(!isValid) return;
    }
    return(
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Электронная почта'
                    name='email'
                    value={data.email} 
                    error = {errors.email} 
                    onChange = {onChangeInput}
                 />
                <TextField 
                    label='Пароль'
                    type='password' 
                    name='password' 
                    value={data.password} 
                    error = {errors.password}
                    onChange = {onChangeInput}
                 />
                 <SelectField
                 value = {data.profession}
                 error = {errors.profession}
                 onChange = {onChangeInput}
                 defaultOption = 'Выбрать...'
                 label = 'Выберите свою профессию'
                 />
                 <RadioField
                 options={[
                    {name: 'Male', value: 'male'},
                    {name: 'Female', value: 'female'},
                ]}
                label = 'Выберите ваш пол'
                 name='sex'
                 onChange={onChangeInput}
                 value = {data.sex}
                 />
                 <ChoiseProfessionSelect
                 value = {data.qualities}
                 error = {errors.qualities}
                 onChange = {onChangeInput}
                 label = 'Выберите свое качество'
                 defaultOption = 'Выбрать...'
                 />
                 <CheckBoxField
                 value={data.licence}
                 name = 'licence'
                 onChange={onChangeInput}
                 error = {errors.licence}
                 >
                    Подтвердить <a>лицензионное соглашение</a>
                </CheckBoxField>
                <button type='submit' className='btn btn-primary w-100 mx-auto'>Submit</button>
            </form>
    )
}
 
export default RegisterForm;