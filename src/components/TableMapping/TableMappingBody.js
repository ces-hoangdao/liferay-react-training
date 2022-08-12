import { TableBody, TableRow } from "@mui/material"
import { useSelector } from "react-redux"
import TableCellCustom from "./TableMappingStyle"
import Select from "../Select"

function TableMappingBody() {
  const headers = useSelector((state) => state.data.headers)
  return (
    <TableBody>
      {headers.map((head, index) => (
        <TableRow key={index}>
          <TableCellCustom>{head}</TableCellCustom>
          <TableCellCustom>
            <Select index={index} />
          </TableCellCustom>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default TableMappingBody
