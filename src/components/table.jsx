import React, {useState} from 'react';
import api from '../api'


const MyTableInfo = () => {

    const[users, setUsers] = useState(api.users.fetchAll())
    const handleDelete = (userId) => {
        setUsers((users.filter((user) => user._id !== userId)))
    };

    function resultTableAfterDeletingAllUsers(){
        return <div className='badge bg-primary text-wrap Text_wrap'>
        Таблица пуста
    </div>
    };

    return (
        <>
            {users.length === 0 ? resultTableAfterDeletingAllUsers():
        <table class="table table table-dark table-striped">
  <thead>
    <tr>
    <th scope="col">Имя</th>
        <th scope="col">Качество</th>
        <th scope="col">Профессия</th>
        <th scope="col">Оценка</th>
        <th>qqqq</th>
    </tr>
  </thead>
  <tbody>
        {users.map((user) => (
        <tr key={user._id}>
            <td className=''>{user.name}</td>
            <td className='td_table'>{user.qualities}</td>
            <td className=''>{user.profession}</td>
            <td className=''>{user.rate}</td>
            <td className='table-light'><button className = {'btn btn-danger delete_Button'} onClick = {() => handleDelete(user._id)}>
                Удалить
                </button></td>
        </tr>
        ))}
    </tbody>
    </table>
    
    }

    <button className = {'btn btn-primary Add_Button'}>Добавить пользователя</button>

        </>
        
    )

}

export default MyTableInfo;
