import { styled } from "@mui/material/styles"
import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { formActions } from "../../redux/formSlice"

const CustomPrevButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background,
  color: theme.palette.button.secondary.main,
  padding: 16,
  fontWeight: theme.typography.fontWeightBold,
  minWidth: 180,
  "&:hover": {
    border: `1px solid ${theme.palette.button.secondary.main}`,
  },
}))

function PrevButton() {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.form.step)
  const goBack = () => dispatch(formActions.goPrev())
  if (step === 0) return null
  return <CustomPrevButton onClick={() => goBack()}>Previous</CustomPrevButton>
}

export default PrevButton
