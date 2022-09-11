import React, { useEffect, useState } from "react";
import AddForm from './AddForm';
import EditForm from "./AddForm/editForm";
import Loading from "./Loading";
import DeleteUserById from "./AddForm/deleteUserById";
import ArchiveUsers from './AddForm/arhiveUsers';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAllUsers } from "../features/user/userSlice";
import { Link } from "react-router-dom";

const MyTableInfo = () => {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.user.AllUsers);

  const [isAdding, setIsAdding] = useState(false);
  const [editingUser, setEditingUser] = useState();
  
  const handleDelete = (userId) => {
    beforeUserDelete(userId)
  };

  const beforeUserDelete = (userId) => {
    archiveUser(userId);
  };

  const archiveUser = (id) => {
    dispatch(setAllUsers(
      Users.map(user => user._id === id ? { ...user, isArchived: true } : user)
    ));
  };

  const archiveAllUsers = () => {
    dispatch(setAllUsers(
      Users.map(user => ({ ...user, isArchived: true }))
    ));
  };

  const addUser = (userData) => {
    dispatch(setAllUsers(
      Users.concat(userData)
    ))
    onUserAdded();
  };

  const onUserAdded = () => {
    setIsAdding(false);
  };

  const handleEdit = (id) => {
    setEditingUser(Users.find(user => user._id === id));
    console.log(Users)
  };
  
  const editUser = (id, newData) => {
    dispatch(setAllUsers(
      Users.map(user => user._id === id ? { ...newData, _id: id } : user)
    ));
    onUserEdit();
  };

  const onUserEdit = () => {
    setEditingUser(null);
  };
  const  resultAfterDeletingAllUsers = () => {
     return (
      <span className="badge  bg-danger m-2">Все пользователи были перемещены в архив</span>
     )
  }
  const existingUsers = Users.filter(x => !x.isArchived);
  return (
    <div> 
      <>
        {existingUsers.length === 0 ? '' : 
         <table className="table table table-dark table-striped">
         <thead>
           <tr>
             <th scope="col">Имя</th>
             <th scope="col">Качество</th>
             <th scope="col">Профессия</th>
             <th scope="col">Оценка</th>
             <th>Количество пользователей: {existingUsers.length}</th>
           </tr>
         </thead>
         <tbody>
           {existingUsers.map((user) => (
             <tr key={user._id}>
               <td className="table__user-name"><Link to={`/Users/${user._id}`}>{user.name}</Link></td>
               <td className="td_table">{user.qualities}</td>
               <td>{user.profession}</td>
               <td>{user.rate} /5</td>
               <td className="table-light">
                 <button
                   className={"btn btn-secondary delete_Button"}
                   onClick={() => handleDelete(user._id)}
                 >
                   В архив
                 </button>
                 <button
                   className={"btn btn-primary ms-2"}
                   onClick = {() => handleEdit(user._id)}
                 >
                   Редактировать
                 </button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
} </>

     {!existingUsers.length ? '' : <>
     <button
        className={"btn btn-primary btn-sm Add_Button"}
        onClick={() => {
          setIsAdding(true);
        }}
      >
        Добавить пользователя
      </button>
      
      <button onClick={archiveAllUsers} className="btn btn-primary btn-sm m-2">Добавить вcех в архив</button>
      { editingUser ? <EditForm editUser={editUser} editingUser={editingUser} /> : null }
      { isAdding ? <AddForm addUser={addUser} /> : null}
      { !editingUser && !isAdding ? <DeleteUserById deleteUserById={handleDelete} /> : null }
     </>}
      <ArchiveUsers arсhiveUsers = {Users.filter(x => x.isArchived)} />
   </div>
  );
};

export default MyTableInfo;