import React, { useState } from "react";

const AddForm = (props) => {
  const [name, setName] = useState('');
  const [quality, setQuality] = useState('');
  const [profession, setProfession] = useState('');
  const [estimation, setEstimation] = useState('');
  

  const onChangeInput = (cb) => {
    return (event) => {
      const value = event.target.value;
  
      cb(value);
    };
  };

  const onClickSubmit = () => {
    // name: "Username 1",
    // profession: 'Доктор',
    // qualities:'тег 1',
    // rate: 1,
    props.addUser({
      name: name,
      profession: profession,
      qualities: quality,
      rate: estimation,
      id: Math.random(),
    });
  };
  
  return (
    <div>
      <input value={name} onChange={onChangeInput(setName)} />
      <input value={quality} onChange={onChangeInput(setQuality)} />
      <input value={profession} onChange={onChangeInput(setProfession)} />
      <input value={estimation} onChange={onChangeInput(setEstimation)} />
      <button onClick={onClickSubmit}>Готово</button>
    </div>
  );
};

export default AddForm;
