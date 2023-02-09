import React from "react";

const Button = ({ name, handleCategory }) => {
  return <button onClick={() => handleCategory(name)}>{name}</button>;
};

export default Button;
