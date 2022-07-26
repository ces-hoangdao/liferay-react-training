import { Controller, useFormContext } from "react-hook-form"
import { styled } from "@mui/material/styles"
import { Box, Select, InputLabel, MenuItem, inputLabelClasses } from "@mui/material"
import PropTypes from "prop-types"

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  letterSpacing: "1px",
  fontSize: theme.typography.label.fontSize,
  [`& .${inputLabelClasses.asterisk}`]: {
    color: theme.palette.error.main,
  },
}))

function SelectInput(props) {
  const { label, value, name, required, handleChange, options } = props
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()
  if (options.length === 0) return null
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 2,
      }}
    >
      <CustomLabel shrink htmlFor={name} required={required}>
        {label}
      </CustomLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            fullWidth
            {...field}
            error={!!errors[name]}
            helpertext={errors[name] ? errors[name].message : ""}
            id={name}
            name={name}
            value={value}
            {...register(String(name), { onChange: handleChange })}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </Box>
  )
}

export default SelectInput

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}
