import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../services/schema";
const InputWrapper = (props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
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
        <p className="error">{errors[elementName].message}</p>
      )}
    </div>
  );
};

export default InputWrapper;
