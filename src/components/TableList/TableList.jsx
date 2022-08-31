import { Paper, Table, TableHead, TableRow, TableContainer } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getOrders } from '../../services/ordersService'
import TableListBody from './TableBody'
import Pagination from './TableFooter'
import { tableActions } from '../../redux/tableSlice'
import TableCellCustom from './TableCustom'
import { COL_NAME } from '../../constants/tableConstants'
import { TableSkeleton } from '../Skeleton'

export default function TableList() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const pageSize = useSelector((state) => state.table.pageSize)
  const page = useSelector((state) => state.table.page)
  const filter = useSelector((state) => state.table.filter)
  const dispatch = useDispatch()
  useEffect(() => {
    setLoading(true)
    getOrders({ pageSize, page, filter }).then((res) => {
      setOrders(res.data.items)
      dispatch(tableActions.setTotalCount(res.data.totalCount))
      setLoading(false)
    })
  }, [pageSize, page, filter])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {COL_NAME.map((col) => (
              <TableCellCustom key={col.colName} align={col.align}>
                {col.colName}
              </TableCellCustom>
            ))}
          </TableRow>
        </TableHead>
        {loading ? <TableSkeleton /> : <TableListBody orders={orders} />}
      </Table>
      <Pagination />
    </TableContainer>
  )
}
