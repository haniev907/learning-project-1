import React from 'react';

const CheckBoxField = ({name, value, onChange, children, error}) => {

  const getInputClasses = () => {
    return 'form-check-input' + (error ? ' is-invalid' : '')
}
  const handleChange = () => {
    onChange(
      {
        name: name, 
        value: !value
      })
  }
    return ( 
        <div className="form-check mb-4">
          <input
           className={getInputClasses()} 
           type="checkbox"
           value="" 
           id={name}
           onChange = {handleChange}
           checked = {value}
           />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {children}
          </label>
          {error && <div className="invalid-feedback">{error}</div>}
  </div>
     );
}
 
export default CheckBoxField;