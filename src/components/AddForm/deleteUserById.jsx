import React, { useState } from 'react';

const DeleteUserById = ({ deleteUserById }) => {
    const [id, setId] = useState();
    const onChangeInput = cb => {
        return event => {
            const value = event.target.value;
            return cb(value);
        };
    };

    return (
        <div>
            <input className='text-field__input' type="number" placeholder="Введите id пользователя здесь" onChange={onChangeInput(setId)}/>
            <button onClick={() => deleteUserById('ID: ' + id)} className = 'btn btn-danger btn-sm ms-2'>Удалить</button>
        </div>
     );
}
 
export default DeleteUserById;