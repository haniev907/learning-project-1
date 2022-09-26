import React , {useState} from 'react';

const EditForm = (props) => {
    const [name, setName] = useState(props.editingUser.name);
    const [quality, setQuality] = useState(props.editingUser.qualities);
    const [profession, setProfession] = useState(props.editingUser.profession);
    const [estimation, setEstimation] = useState(props.editingUser.rate);
    const userId = props.editingUser._id;
  
    const onChangeInput = (cb) => {
      return (event) => {
        const value = event.target.value;
        cb(value);
      };
    };
  
    const onClickSubmit = () => {
      props.editUser(userId, {
        name: name,
        qualities: quality,
        profession: profession,
        rate: estimation
      });
    };
  
    return (
      <div>
        <input type={'text'} className="form-control inputEditForm" value={name} placeholder = "Имя" onChange={onChangeInput(setName)} />
        <input type={'text'} className="form-control inputEditForm" value={quality} placeholder = "Качество" onChange={onChangeInput(setQuality)} />
        <input type={'text'} className="form-control inputEditForm" value={profession} placeholder = "Профессия" onChange={onChangeInput(setProfession)} />
        <input type={'number'} className="form-control inputEditForm" value={estimation} placeholder = "Оценка /5"  onChange={onChangeInput(setEstimation)} />
        <button className="btn btn-primary btn-sm w-100" onClick={onClickSubmit}>Редактировать</button>
      </div>
    );
  };

 
export default EditForm;