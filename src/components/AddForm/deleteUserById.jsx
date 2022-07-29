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
            <input type="number" placeholder="Enter user id here" onChange={onChangeInput(setId)}/>
            <button onClick={() => deleteUserById('ID: ' + id)}>Удалить</button>
        </div>
     );
}
 
export default DeleteUserById;