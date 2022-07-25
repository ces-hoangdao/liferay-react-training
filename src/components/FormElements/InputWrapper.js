import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";
const InputWrapper = (props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const elementName = props.name;
  const label = props.label;
  const data = props.data;
  const type = props.type;
  let required = "";
  if (props.required === true) {
    required = "required";
  }
  return (
    <div className={`input-area ${required}`}>
      <label htmlFor="firstName">{label}</label>
      <Controller
        name={elementName}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            id={elementName}
            name={elementName}
            value={data[elementName]}
            placeholder={label}
            {...register(String(elementName), {
              onChange: props.handleChange,
            })}
          />
        )}
      />
      {errors[elementName] && (
        <div className="error">{errors[elementName].message}</div>
      )}
    </div>
  );
};

export default InputWrapper;
