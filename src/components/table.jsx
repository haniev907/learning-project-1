import React, { useState } from "react";
import api from "../api";
import AddForm from './AddForm';
import EditForm from "./AddForm/editForm";
import DeleteUserById from "./AddForm/deleteUserById";

const MyTableInfo = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [isAdding, setIsAdding] = useState(false);
  const [editingUser, setEditingUser] = useState();

  // const [isEdit, setIsEdit] = useState();

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  function resultTableAfterDeletingAllUsers() {
    return (
      <div className="badge bg-danger m-2 divDeleteTable">Таблица пуста!</div>
    );
  }

  const addUser = (userData) => {
    setUsers((users) => users.concat(userData));
    onUserAdded();
  };

  const onUserAdded = () => {
    setIsAdding(false)
  };

  const deletedTable = () => {
    setUsers([]);
  };

  const handleReset = () => {
    setUsers(api.users.fetchAll())
  };

  const handleEdit = (id) => {
    setEditingUser(users.find(user => user._id === id));
  };

  const editUser = (id, newData) => {
    setUsers(users.map(user => user._id === id ? { ...newData, _id: id } : user));
    onUserEdit();
  };

  const onUserEdit = () => {
    setEditingUser(null);
  };

  return (
    <> 
      {users.length === 0 ? (
        resultTableAfterDeletingAllUsers()
      ) : (
        <table class="table table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">ID пользователя</th>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Оценка</th>
              <th>Колличество пользователей: {users.length}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user}>
                <td>{user._id}</td>
                <td className="">{user.name}</td>
                <td className="td_table">{user.qualities}</td>
                <td className="">{user.profession}</td>
                <td className="">{user.rate}</td>
                <td className="table-light">
                  <button
                    className={"btn btn-danger delete_Button"}
                    onClick={() => handleDelete(user._id)}
                  >
                    Удалить
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
      )}
      <button
        className={"btn btn-primary btn-sm Add_Button"}
        onClick={() => {
          setIsAdding(true);
        }}
      >
        Добавить пользователя
      </button>
      
      {users.length === 0 ? '' : <button onClick={deletedTable} className="btn btn-primary btn-sm m-2">Удалить вcех пользователей</button>}
      <button className="btn btn-danger btn-sm m-1" onClick={handleReset}>Сбросить</button>
      { editingUser ? <EditForm editUser={editUser} editingUser={editingUser} /> : null }
      { isAdding ? <AddForm addUser={addUser} /> : null}
      { !editingUser ? <DeleteUserById deleteUserById={handleDelete} /> : null }
    </>
  );
};

export default MyTableInfo;
