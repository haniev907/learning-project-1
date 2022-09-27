import React from "react";
import { useSelector } from "react-redux";

const ChoiseProfessionSelect = ({
  defaultOption,
  value,
  error,
  onChange,
  label,
}) => {
  const Users = useSelector((state) => state.user.AllUsers);

  const getInputClasses = () => {
    return "form-select" + (error ? " is-invalid" : "");
  };
  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={value + "_"}
        name="qualities"
        value={value}
        onChange={onChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {Users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.qualities}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default ChoiseProfessionSelect;
