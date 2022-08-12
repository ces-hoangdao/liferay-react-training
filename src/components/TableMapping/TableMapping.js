import { TableHead, TableRow, Table } from "@mui/material"
import { useSelector } from "react-redux"
import TableMappingBody from "./TableMappingBody"
import TableCellCustom from "./TableMappingStyle"

function TableMapping() {
  const data = useSelector((state) => state.data.productsInfo)
  if (!data?.length) return null
  return (
    <div>
      <Table
        sx={{
          marginTop: 2,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCellCustom>Fields</TableCellCustom>
            <TableCellCustom>Mapping</TableCellCustom>
          </TableRow>
        </TableHead>
        <TableMappingBody />
      </Table>
    </div>
  )
}

export default TableMapping
