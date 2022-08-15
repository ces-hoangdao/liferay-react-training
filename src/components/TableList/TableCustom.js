import { TableCell, tableCellClasses, styled } from '@mui/material'

const TableCellCustom = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    padding: 5,
    fontSize: '14px',
  },
  [`&.${tableCellClasses.root}`]: {
    border: `1px solid ${theme.palette.table.main}`,
  },
  [`&.${tableCellClasses.head}`]: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
}))
export default TableCellCustom
