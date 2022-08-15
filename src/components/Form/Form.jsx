import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
  Dialog,
} from '@mui/material'
import InputWrapper from '../FormElements/InputWrapper'
import CustomButton from '../FormElements/CustomButton'
import formSchema from '../../helper/schema'
import { formActions } from '../../redux/formSlice'
import FORM_FILEDS from '../../constants/formConstants'

const FormDialog = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.form.data)
  const methods = useForm({ resolver: yupResolver(formSchema), mode: 'all' })
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = (e) => {
    dispatch(formActions.setData({ fieldName: e.target.name, value: e.target.value }))
  }

  return (
    <Box>
      <Button variant="contained" onClick={handleClickOpen}>
        Send an Email
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <DialogTitle>Input your information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will
            send updates occasionally.
          </DialogContentText>
          <FormProvider {...methods}>
            {FORM_FILEDS.map((field, index) => (
              <InputWrapper
                key={index}
                label={field.label}
                value={data[field.name]}
                name={field.name}
                type={field.type}
                handleChange={handleChange}
              />
            ))}
          </FormProvider>
        </DialogContent>
        <DialogActions>
          <CustomButton variant="contained" color="warning" onClick={handleClose}>
            Cancel
          </CustomButton>
          <CustomButton variant="contained" onClick={handleClose}>
            Submit
          </CustomButton>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default FormDialog
