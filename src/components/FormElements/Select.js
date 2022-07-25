import { Controller,useFormContext } from "react-hook-form";
import { Select, MenuItem } from "@mui/material";


const SelectInput = (props) => {
  const {
    register,
    control,
  } = useFormContext();
  const label = props.label;
  const elementName = props.name;
  const data = props.data;
  let required = "";
  if (props.required === true) {
    required = "required";
  }
  return (
    <div className={`input-area ${required}`}>
      <label htmlFor="relationShip"> {label}</label>
      <Controller
        name={elementName}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            id={elementName}
            name={elementName}
            value={data[elementName]}
            {...register(String(elementName), { onChange: props.handleChange })}
          >
            <MenuItem value="spouse">Spouse</MenuItem>
            <MenuItem value="children">Children</MenuItem>
            <MenuItem value="relatives">Relatives</MenuItem>
          </Select>
        )}
      />
    </div>
  );
};

export default SelectInput;
