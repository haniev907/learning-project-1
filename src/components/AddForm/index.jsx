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
    props.addUser({
      name: name,
      profession: profession,
      qualities: quality,
      rate: estimation,
      _id: Math.random(),
    });
  };

  return (
    <div>
      <input type={'text'} className="form-control input" value={name} placeholder = "Имя" onChange={onChangeInput(setName)} />
      <input type={'text'} className="form-control input" value={quality} placeholder = "Качество" onChange={onChangeInput(setQuality)} />
      <input type={'text'} className="form-control input" value={profession} placeholder = "Профессия" onChange={onChangeInput(setProfession)} />
      <input type={'number'} className="form-control input" value={estimation} placeholder = "Оценка /5"  onChange={onChangeInput(setEstimation)} />
      <button className="btn btn-outline-primary btn-sm button-next" onClick={onClickSubmit}>Добавить</button>
    </div>
  );
};

export default AddForm;
 