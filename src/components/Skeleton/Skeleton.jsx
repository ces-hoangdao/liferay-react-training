import { TableRow, TableCell, Skeleton as Loading, TableBody } from '@mui/material'
import { useSelector } from 'react-redux'
import { COL_NAME } from '../../constants/tableConstants'

const TableSkeleton = () => {
  const pageSize = useSelector((state) => state.table.pageSize)
  return (
    <TableBody>
      {Array(pageSize)
        .fill(0)
        .map((_, index) => (
          <TableRow key={index}>
            {COL_NAME.map((col) => (
              <TableCell key={col.colName}>
                <Loading animation="wave" key={col.colName} />
              </TableCell>
            ))}
          </TableRow>
        ))}
    </TableBody>
  )
}

export { TableSkeleton }
