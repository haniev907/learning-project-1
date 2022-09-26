import React, { useEffect, useState } from "react";
import Users from '../layouts/Users';
import Login from '../layouts/Login';
import Main from '../layouts/Main';
import NavBar from './NavBar';
import { useDispatch } from "react-redux";
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { setAllUsers } from "../features/user/userSlice";
import axios from 'axios'

const App = () => {
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        const instance = axios.create({
            baseURL: 'http://127.0.0.1:5000/',
            timeout: 10000,
            headers: {'X-Custom-Header': 'foobar'}
        });
    
        setTimeout(() => {
            instance.get('/users').then((response) => {
            // setLoading(true);
            dispatch(setAllUsers(
                response.data.users
            ));
            // setLoading(false)
            })
        }, 3000);
    },[]);
    
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path='/Users/:userId?' component={Users}/>
                <Route path='/Login/:type?' component={Login}/>
                <Route path='/' component={Main}/>
                <Redirect to='/'/> 
            </Switch>
        </div>
     );
}
 
export default App;