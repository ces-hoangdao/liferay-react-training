import PropTypes from 'prop-types'
import { TableBody, TableCell, TableRow } from '@mui/material'
import LabelStatus from './LabelStatus'

const TableListBody = ({ orders }) => {
  return (
    <TableBody>
      {orders?.length
        ? orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell sx={{ fontWeight: 'bold', fontSize: 12 }}>{order.id}</TableCell>
              <TableCell align="right">{order.account.name}</TableCell>
              <TableCell align="right">{order.accountId}</TableCell>
              <TableCell align="right">
                {new Date(order.orderDate).toLocaleString()}
              </TableCell>
              <TableCell align="right">
                <LabelStatus orderStatus={order.orderStatus} />
              </TableCell>
              <TableCell align="right">{order.totalFormatted}</TableCell>
            </TableRow>
          ))
        : null}
    </TableBody>
  )
}

TableListBody.propTypes = {
  orders: PropTypes.array.isRequired,
}

export default TableListBody
