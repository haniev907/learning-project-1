import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const UserPage = ({ userId }) => {
  const getById = (id) => Users.find((x) => x._id === id);
  const Users = useSelector((state) => state.user.AllUsers);
  const history = useHistory();
  const [foundUser] = React.useState(getById(userId));

  const handleClick = () => {
    history.push("/users");
  };
  if (foundUser) {
    return (
      <div className="container_1">
        <div className="block">
          <img
            className="container__img"
            style={{ width: "300px" }}
            src="https://cdn-icons-png.flaticon.com/512/6997/6997519.png"
            alt="аватарка пользователя"
          />
          <h1 className="ms-2 container__h1">{foundUser.name}</h1>
          <h2 className="bg-success text-light ms-2" style={{ width: 380 }}>
            Профессия: {foundUser.profession}
          </h2>
          <h3 className="bg-warning text-light ms-2" style={{ width: 280 }}>
            Качество: {foundUser.qualities}
          </h3>
          <h4 className="bg-info text-light ms-2" style={{ width: 130 }}>
            Рейтинг: {foundUser.rating}
          </h4>
          <button
            className="btn btn-sm btn-primary ms-2"
            style={{ width: "98%" }}
            onClick={handleClick}
          >
            Все пользователи
          </button>
        </div>
      </div>
    );
  } else {
    return <div className="loader"></div>;
  }
};

export default UserPage;
