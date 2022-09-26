import React from 'react';

const RadioField = ({label, options, name, value, onChange}) => {
    return ( 
        <div className='mb-4'>
            <label className='mb-2'>{label}</label>
            <div>
            {options.map((options) => (
            <div key={options.name + "_" + options.value} className="form-check form-check-inline">
                <input
                    className="form-check-input" 
                    type="radio"
                    name={name} 
                    id={options.name + "_" + options.value}
                    value={value}
                    onChange = {onChange}
                  />
                <label 
                    className="form-check-label"
                    htmlFor="inlineRadio1">{options.name}</label>
            </div>))}
            </div>
        </div>
     );
}
 
export default RadioField;