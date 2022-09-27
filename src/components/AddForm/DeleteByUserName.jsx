import React, { useState } from "react";

const DeleteUserById = ({ deleteUserByUserName }) => {
  const [userName, setUserName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteUserByUserName(userName);
    setUserName("");
  };

  const onChangeInput = (e) => {
    setUserName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <div style={{ width: "100%", clear: "both" }} className="">
      <form onSubmit={handleSubmit}>
        <div className="input-by-id">
          <input
            className="form-control w-50 mb-1"
            type="text"
            placeholder="Введите имя пользователя"
            onChange={onChangeInput}
            onKeyDown={handleKeyPress}
            value={userName}
          />
        </div>
        <div>
          <button className="btn btn-secondary btn-sm w-50 mb-2 delete-by-id">
            Удалить
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteUserById;
