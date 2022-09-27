import React from "react";
import CheckBoxField from "../components/CheckBoxField";
import TextField from "../components/TextField";
import { validator } from "../utils/validate";

const Login = () => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    stayOn: false,
  });
  const [errors, setErrors] = React.useState({});

  const onChangeInput = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Поле пароль обязательна для заполнения",
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      },
      isContainDigit: {
        message: "Пароль должен содержать хотя бы одно число",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
  };
  React.useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        error={errors.email}
        onChange={onChangeInput}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        error={errors.password}
        onChange={onChangeInput}
      />
      <CheckBoxField value={data.stayOn} name="stayOn" onChange={onChangeInput}>
        Оставаться в системе
      </CheckBoxField>
      <button type="submit" className="btn btn-primary w-100 mx-auto">
        Submit
      </button>
    </form>
  );
};

export default Login;
