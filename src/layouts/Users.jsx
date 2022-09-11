import React from 'react';
import { useParams } from 'react-router-dom';
import MyTableInfo from '../components/MyTableInfo';
import UserPage from '../components/UserPage';

const Users = () => {
    const params = useParams();
    const {userId} = params;
    return (
        <>
        {userId ? <UserPage userId = {userId}/> : <MyTableInfo/>}
        </>
    )
}
 
export default Users;