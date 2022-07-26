import { TableHead, TableRow, Table } from "@mui/material"
import { useSelector } from "react-redux"
import TableMappingBody from "./TableMappingBody"
import TableCellCSS from "./TableMappingStyle"

function TableMapping() {
  const data = useSelector((state) => state.data.data)
  if (data.length === 0) return null
  return (
    <div>
      <Table
        sx={{
          marginTop: 2,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCellCSS>Fields</TableCellCSS>
            <TableCellCSS>Mapping</TableCellCSS>
          </TableRow>
        </TableHead>
        <TableMappingBody />
      </Table>
    </div>
  )
}

export default TableMapping
