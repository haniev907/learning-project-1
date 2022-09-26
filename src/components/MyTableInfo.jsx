import React, {useState } from "react";
import AddForm from './AddForm';
import EditForm from "./AddForm/EditForm";
import DeleteUserById from "./AddForm/DeleteByUserName";
import ArchiveUsers from './AddForm/ArсhiveUsers';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAllUsers } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import Bookmark from "./Bookmark";

const MyTableInfo = () => {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.user.AllUsers);

  const [isAdding, setIsAdding] = useState(false);
  const [editingUser, setEditingUser] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [openOptions, setOpenOptions] = useState(false)

  const handleDelete = (userName) => {
   dispatch(setAllUsers(
    Users.filter((user) => user.name !== userName)
   ))
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

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  };
  const existingUsers = Users.filter(x => !x.isArchived);
  
  const filteredUser = existingUsers.filter((user) => {
    return user.name.toLowerCase().includes(searchQuery.toLowerCase())
});
const handleToogle = (id) => {
  dispatch(setAllUsers(
    Users.map((user) => {
      if(user._id === id){
        return { ...user, bookmark: !user.bookmark };
      };
      return user;
    })
  ))
}

  return (
    
    <div> 
         <input
          type = 'search'
          placeholder="Поиск..." 
          name="searchQuery"
          className='form-control border border-primary w-50 mx-auto mt-2'
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        {filteredUser.length === 0 ? '' : 
         <table className="table table table-striped w-50 mx-auto">
         <thead>
           <tr>
             <th scope="col">Имя</th>
             <th scope="col">Качество</th>
             <th scope="col">Профессия</th>
             <th scope="col">Оценка</th>
             <th style={{fontSize: '14px' , width: 300}} scope="col">В Избранное</th>
             <th style={{fontSize: '14px'}}>Количество пользователей: {filteredUser.length}</th>
           </tr>
         </thead>
         <tbody>
           {filteredUser.map((user) => (
             <tr key={user._id}>
               <td className="table__user-name">
                <Link to={`/Users/${user._id}`} className = 'text-primary'>{user.name}</Link>
              </td>
               <td className="td_table">{user.qualities}</td>
               <td>{user.profession}</td>
               <td>{user.rate} /5</td>
               <td><Bookmark user = {user} toggleUser = {handleToogle}/></td>
               <td className="table-light">
                 <button
                   className={"btn btn-secondary mt-1 ms-1 delete_Button"}
                   onClick={() => archiveUser(user._id)}
                 >
                   В архив
                 </button>
                 <button
                   className={"btn btn-primary mt-1 ms-1 "}
                   onClick = {() => handleEdit(user._id) + setOpenOptions(true)}
                 >
                   Редактировать
                 </button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
}     {!filteredUser.length ? '' : 
     <div className="table__option mx-auto">
    {openOptions ? '' : <button className="btn btn-sm btn-primary w-100 table__btn-option" onClick={() => setOpenOptions(true)}>Опции</button>}
      {
        openOptions && 
        <>
        { !editingUser && !isAdding ? <DeleteUserById deleteUserByUserName={handleDelete} /> : null }
     <button
        className={"btn btn-primary mb-2 btn-sm Add_Button"}
        onClick={() => {
          setIsAdding(true);
        }}
      >
        Добавить пользователя
      </button>
      {!isAdding && <button onClick={archiveAllUsers} className="btn btn-primary btn-sm ms-1 mb-2">Добавить вcех в архив</button>}
      { editingUser ? <EditForm editUser={editUser} editingUser={editingUser} /> : null }
      { isAdding ? <AddForm addUser={addUser} /> : null}
     <button className="btn btn-sm btn-danger mt-2 w-100" onClick={() => setOpenOptions(false)}>закрыть</button> 

        </>
      }
     </div>
     }
      <ArchiveUsers arсhiveUsers = {Users.filter(x => x.isArchived)} />
   </div>
  );
};

export default MyTableInfo;