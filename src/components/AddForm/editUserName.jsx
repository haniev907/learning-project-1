import React, { useState } from 'react';

const EditUserName = (props) => {
    const [name, setName] = useState(props.editingUserName.name);
    const [quality, setQuality] = useState(props.editingUserName.qualities);
    const [profession, setProfession] = useState(props.editingUserName.profession);
    const [estimation, setEstimation] = useState(props.editingUserName.rate);
    const userId = props.editingUserName._id;

    const onChangeInput = (cb) => {
        return (event) => {
          const value = event.target.value;
      
          cb(value);
        };
      };
    
      const onClickSubmit = () => {
        props.editUserName(userId, {
          name: name,
          qualities: quality,
          profession: profession,
          rate: estimation,
        });
      };

    return ( 
        <>
           <input type="text" name="input"className='form-control inputEditNameForm' value={name} onChange={onChangeInput(setName)}/>
            <button className='btn btn-secondary btn-sm btnEditName' onClick={onClickSubmit}>Готово</button>
        </>
     );
}
 
export default EditUserName;