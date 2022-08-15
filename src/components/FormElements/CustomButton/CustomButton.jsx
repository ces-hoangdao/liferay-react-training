import { Button, styled } from '@mui/material'

const CustomButton = styled(Button)(({ theme }) => ({
  padding: 14,
  minWidth: 160,
  fontWeight: theme.typography.fontWeightBold,
}))

export default CustomButton
