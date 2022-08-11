import React, { useEffect, useState } from "react";
import api from '../api'
import AddForm from './AddForm';
import EditForm from "./AddForm/editForm";
import Loading from "./Loading";
import DeleteUserById from "./AddForm/deleteUserById";
import ArchiveUsers from './AddForm/arhiveUsers';
import EditUserName from './AddForm/editUserName'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAllUsers } from "../features/user/userSlice";

const MyTableInfo = () => {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.user.AllUsers);

  // const [users, setUsers] = useState(api.users.fetchAll());
  const [isAdding, setIsAdding] = useState(false);
  const [editingUser, setEditingUser] = useState();
  const [isLoading, setLoading] = useState(true);
  const [editingUserName, setEditUserName] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      dispatch(setAllUsers(
        api.users.fetchAll()
      ));
    }, 3000); 
  }, []);
 
  const handleDelete = (userId) => {
    beforeUserDelete(userId)

    //const user = Users.find(user => user._id === userId);
    //archiveUser(userId);
    // const user = Users.find(user => user._id === userId);
    // dispatch(setAllUsers(
    //   user
    // ));
    // onIsArсhive(user);

    // const newUsers = Users.filter((user) => user._id !== userId);
    // dispatch(setAllUsers(
    //   newUsers
    // ));
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

  // const onIsArсhive = user => {
  //   setIsArсhive([...isArсhive, user]);
  // };

  const addUser = (userData) => {
    dispatch(setAllUsers(
      Users.concat(userData)
    ))
    onUserAdded();
  };

  const onUserAdded = () => {
    setIsAdding(false);
  };
  // const fromTableToArchive = () => {
  //   setIsArсhive([...Users]);
  // };
  
  // const deletedTable = () => {
  //   dispatch(setAllUsers(
  //     []
  //   ))
  //   fromTableToArchive();
  // };

  const handleReset = () => {
    dispatch(setAllUsers(
      api.users.fetchAll()
    ))
  };

  const handleEdit = (id) => {
    setEditingUser(Users.find(user => user._id === id));
    console.log(Users)
  };

  const handleEditUserName = (id) => {
    setEditUserName(Users.find(user => user._id === id));
  };
  
  const editUser = (id, newData) => {
    dispatch(setAllUsers(
      Users.map(user => user._id === id ? { ...newData, _id: id } : user)
    ));
    onUserEdit();
    onUserNameEdit()
  };

  const onUserEdit = () => {
    setEditingUser(null);
  };
  const onUserNameEdit = () => {
    setEditUserName(null);
  };
  const  resultAfterDeletingAllUsers = () => {
     return (
      <span className="badge  bg-danger m-2">Все пользователи были перемещены в архив</span>
     )
  }
  const existingUsers = Users.filter(x => !x.isArchived);
  
  return (
    <div> 
      {isLoading ? <Loading/> : 
      <>
        {existingUsers.length === 0 ? resultAfterDeletingAllUsers() : 
         <table className="table table table-dark table-striped">
         <thead>
           <tr>
             <th scope="col">ID пользователя</th>
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
               <td>{user._id}</td>
               <td className="users-name">
                <a href="#" onDoubleClick={() => handleEditUserName(user._id)}>{user.name}</a>
                </td>
               <td className="td_table">{user.qualities}</td>
               <td className="">{user.profession}</td>
               <td className="">{user.rate}</td>
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
     }

     {existingUsers.length > 0 ? <button
        className={"btn btn-primary btn-sm Add_Button"}
        onClick={() => {
          setIsAdding(true);
        }}
      >
        Добавить пользователя
      </button> : ''}
      
      {!existingUsers.length ? '' : <button onClick={archiveAllUsers} className="btn btn-primary btn-sm m-2">Добавить вcех в архив</button>}
      {existingUsers.length  ? <button className="btn btn-danger btn-sm m-1" onClick={handleReset}>Сбросить</button> : ''}
      { !editingUser && !isAdding && existingUsers.length  ? <DeleteUserById deleteUserById={handleDelete} /> : null }
      { editingUser ? <EditForm editUser={editUser} editingUser={editingUser} /> : null }
      { isAdding ? <AddForm addUser={addUser} /> : null}
      <ArchiveUsers arсhiveUsers = {Users.filter(x => x.isArchived)} />
      { editingUserName ? < EditUserName editUserName = {editUser} editingUserName = {editingUserName} /> : null} 
   </div>
  );
};

export default MyTableInfo;