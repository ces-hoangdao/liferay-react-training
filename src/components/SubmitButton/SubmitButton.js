import { styled, Button } from "@mui/material"
import { useSelector } from "react-redux"
import { STEPS } from "../../constants/formConstants"

const CustomSubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.button.primary.light,
  color: theme.palette.common.white,
  fontWeight: theme.typography.inputfontWeight,
  padding: 16,
  minWidth: 180,
  "&:hover": {
    backgroundColor: theme.palette.button.primary.dark,
  },
}))

const SubmitButton = function () {
  const step = useSelector((state) => state.form.step)
  const submitButtonText = step < STEPS.length - 1 ? "Next" : "Submit"
  return <CustomSubmitButton type="submit">{submitButtonText}</CustomSubmitButton>
}

export default SubmitButton
