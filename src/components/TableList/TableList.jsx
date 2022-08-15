import { Paper, Table, TableHead, TableRow, TableContainer } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getOrders } from '../../services/ordersService'
import TableListBody from './TableBody'
import Pagination from './TableFooter'
import { tableActions } from '../../redux/tableSlice'
import TableCellCustom from './TableCustom'

export default function TableList() {
  const [orders, setOrders] = useState([])
  const pageSize = useSelector((state) => state.table.pageSize)
  const page = useSelector((state) => state.table.page)
  const filter = useSelector((state) => state.table.filter)
  const dispatch = useDispatch()
  useEffect(() => {
    getOrders({ pageSize, page, filter }).then((res) => {
      setOrders(res.data.items)
      dispatch(tableActions.setTotalCount(res.data.totalCount))
    })
  }, [pageSize, page, filter])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCellCustom>ORDER ID</TableCellCustom>
            <TableCellCustom align="right">ACCOUNT</TableCellCustom>
            <TableCellCustom align="right">ACCOUNT NUMBER</TableCellCustom>
            <TableCellCustom align="right">ORDER DATE</TableCellCustom>
            <TableCellCustom align="right">STATUS</TableCellCustom>
            <TableCellCustom align="right">AMOUNT</TableCellCustom>
          </TableRow>
        </TableHead>
        <TableListBody orders={orders} />
      </Table>
      <Pagination />
    </TableContainer>
  )
}
