import React from "react";

const Bookmark = ({ user, toggleUser }) => {
  const getInputClasses = () => {
    return "bi bi-bookmark" + (user.bookmark ? "-heart-fill" : "");
  };

  return (
    <button>
      <i className={getInputClasses()} onClick={() => toggleUser(user._id)}></i>
    </button>
  );
};

export default Bookmark;
