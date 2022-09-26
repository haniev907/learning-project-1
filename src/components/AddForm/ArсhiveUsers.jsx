import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAllUsers } from '../../features/user/userSlice' 

const  ArchiveUsers = ( {arсhiveUsers} ) => {

  const count = arсhiveUsers.length;

  const dispatch = useDispatch();
  const Users = useSelector((state) => state.user.AllUsers);

  const handleDelete = (id) => {
    dispatch(setAllUsers(
      Users.map(user => user._id === id ? { ...user, isArchived: false } : user)
    ));
  };
  const archiveIsEmpty = () => {
    return '';
  };
    return ( 
        <div>
          {count === 0 ? (
            archiveIsEmpty()
          ):
             <table className="table table-ligth table-striped">
          <thead>
            <tr>
              <th scope="col">ID пользователя</th>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Оценка</th>
              <th>Колл-во пользователей в архиве : {count} </th>
            </tr>
          </thead>
          <tbody>
            {arсhiveUsers.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td className="">{user.name}</td>
                <td className="td_table">{user.qualities}</td>
                <td className="">{user.profession}</td>
                <td className="">{user.rate}</td>
                <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(user._id)}>удалить из архива</button></td>
              </tr>
            ))}
          </tbody>
        </table>
}
    </div>
     );
}
 
export default ArchiveUsers;