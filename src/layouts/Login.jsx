import React from 'react';

const Login = () => (
    <form style={{width: '30%', margin: '0 auto', fontFamily: 'sans-serif'}}>
        <div style={{paddingTop: '200px'}} className='mb-3'>
        <h1 style={{paddingLeft: '3.8em'}} className = 'mb-4'>LOGIN</h1>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Введите ваш email' />
        </div>
        <div className='mb-4'>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Введите ваш пароль'/>
        </div>
        <button type="submit" style={{width: '100%'}} class="btn btn-primary">Submit</button>
    </form>
)
 
export default Login;