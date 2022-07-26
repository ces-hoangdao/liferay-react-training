import { TableBody, TableRow } from "@mui/material"
import { useSelector } from "react-redux"
import TableCellCSS from "./TableMappingStyle"
import Select from "../Select/Select"

function TableMappingBody() {
  const headers = useSelector((state) => state.data.headers)
  return (
    <TableBody>
      {headers.map((head, index) => (
        <TableRow key={index}>
          <TableCellCSS>{head}</TableCellCSS>
          <TableCellCSS>
            <Select index={index} />
          </TableCellCSS>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default TableMappingBody
