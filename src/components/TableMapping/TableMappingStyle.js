import { TableCell, tableCellClasses, styled } from "@mui/material"

const TableCellCSS = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    padding: 5,
    fontSize: "14px",
  },
  [`&.${tableCellClasses.root}`]: {
    border: `1px solid ${theme.palette.table.main}`,
    textAlign: "center",
  },
  [`&.${tableCellClasses.head}`]: {
    fontSize: "15px",
    fontWeight: "bold",
    padding: "10px 5px",
  },
}))

export default TableCellCSS
