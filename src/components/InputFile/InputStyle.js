import { Box, styled } from "@mui/material"

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: `${theme.palette.input.main}`,
  padding: 16,
  borderRadius: 8,
  fontWeight: "bold",
  "& svg": {
    display: "none",
  },
  "& label": {
    height: 200,
    border: `2px dashed ${theme.palette.input.secondary}`,
  },
}))
