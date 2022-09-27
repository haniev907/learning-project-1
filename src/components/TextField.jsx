import React from "react";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPass = () => {
    setShowPassword((prevState) => !prevState);
  };

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  return (
    <div className="mb-4">
      <label>{label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button
            type="button"
            className="btn btn-outline-secondary "
            onClick={toggleShowPass}
          >
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
export default TextField;
