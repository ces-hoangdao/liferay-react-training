import { Controller, useFormContext } from 'react-hook-form'
import { Box, TextField, InputLabel, inputLabelClasses, styled } from '@mui/material'
import PropTypes from 'prop-types'

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  letterSpacing: '1px',
  fontSize: theme.typography.label.fontSize,
  [`& .${inputLabelClasses.asterisk}`]: {
    color: theme.palette.error.main,
  },
}))
const InputWrapper = (props) => {
  const { label, value, name, type, handleChange } = props
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 2,
      }}
    >
      <CustomLabel shrink htmlFor={name} required>
        {label}
      </CustomLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            {...field}
            error={!!errors[name]}
            name={name}
            type={type}
            value={value}
            placeholder={label}
            id={name}
            helperText={errors[name] ? errors[name].message : ''}
            {...register(String(name), {
              onChange: handleChange,
            })}
          />
        )}
      />
    </Box>
  )
}

export default InputWrapper
InputWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}
