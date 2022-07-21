import React, { useState } from "react";
import api from "../api";

import AddForm from './AddForm';

const MyTableInfo = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [isAdding, setIsAdding] = useState(false);

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
  };

  const deletedTable = () => {
    setUsers(users.filter((user) => user.length --));
  };

  const handleReset = () => {
    setUsers(api.users.fetchAll())
  }
  return (
    <> 
      {users.length === 0 ? (
        resultTableAfterDeletingAllUsers()
      ) : (
        <table class="table table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Оценка</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
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
           <span onClick={deletedTable}>{users.length === 0 ? '' : <button className="btn btn-primary btn-sm m-2">Удалить вcех пользователей</button>}</span>
           <button className="btn btn-danger btn-sm m-1" onClick={handleReset}>Сбросить</button>
      {isAdding ? <AddForm addUser={addUser} /> : null}
    </>
  );
};

export default MyTableInfo;
