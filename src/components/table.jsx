import React, { useEffect, useState } from "react";
import api from '../api'
import AddForm from './AddForm';
import EditForm from "./AddForm/editForm";
import Loading from "./Loading";
import DeleteUserById from "./AddForm/deleteUserById";
import ArchiveUsers from './AddForm/arhiveUsers'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAllUsers } from "../features/user/userSlice";

const MyTableInfo = () => {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.user.AllUsers);

  // const [users, setUsers] = useState(api.users.fetchAll());
  const [isAdding, setIsAdding] = useState(false);
  const [editingUser, setEditingUser] = useState();
  const [isArсhive, setIsArсhive] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      dispatch(setAllUsers(
        api.users.fetchAll()
      ))
    }, 3000)
  }, [])
 
  const handleDelete = (userId) => {
    const user = Users.find(user => user._id === userId);
    dispatch(setAllUsers(
      user
    ));
    onIsArсhive(user);

    const newUsers = Users.filter((user) => user._id !== userId);
    dispatch(setAllUsers(
      newUsers
    ));
  };

  const onIsArсhive = user => {
    setIsArсhive([...isArсhive, user]);
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
  const fromTableToArchive = () => {
    setIsArсhive([...Users]);
  };
  
  const deletedTable = () => {
    dispatch(setAllUsers(
      []
    ))
    fromTableToArchive();
  };

  const handleReset = () => {
    dispatch(setAllUsers(
      api.users.fetchAll()
    ))
  };

  const handleEdit = (id) => {
    setEditingUser(Users.find(user => user._id === id));
    console.log(Users)
  };

  const editUser = (id, newData) => {
    // Users(Users.map(user => user._id === id ? { ...newData, _id: id } : user));
    dispatch(setAllUsers(
      Users.map(user => user._id === id ? { ...newData, _id: id } : user)
    ))
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
  return (
    <div> 
      {isLoading ? <Loading/> : 
      <>
        {Users.length === 0 ? resultAfterDeletingAllUsers() : 
         <table class="table table table-dark table-striped">
         <thead>
           <tr>
             <th scope="col">ID пользователя</th>
             <th scope="col">Имя</th>
             <th scope="col">Качество</th>
             <th scope="col">Профессия</th>
             <th scope="col">Оценка</th>
             <th>Колличество пользователей: {Users.length}</th>
           </tr>
         </thead>
         <tbody>
           {Users.map((user) => (
             <tr key={user._id}>
               <td>{user._id}</td>
               <td className="">{user.name}</td>
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

     {Users.length > 0 ? <button
        className={"btn btn-primary btn-sm Add_Button"}
        onClick={() => {
          setIsAdding(true);
        }}
      >
        Добавить пользователя
      </button> : ''}
      
      {Users.length === 0 ? '' : <button onClick={deletedTable} className="btn btn-primary btn-sm m-2">Добавить вcех в архив</button>}
      {Users.length > 0 ? <button className="btn btn-danger btn-sm m-1" onClick={handleReset}>Сбросить</button> : ''}
      { !editingUser && !isAdding && Users.length > 0 ? <DeleteUserById deleteUserById={handleDelete} /> : null }
      { editingUser ? <EditForm editUser={editUser} editingUser={editingUser} /> : null }
      { isAdding ? <AddForm addUser={addUser} /> : null}
      <ArchiveUsers arсhiveUsers = {isArсhive} />
    </div>
  );
};

export default MyTableInfo;