import { Box, Typography } from '@mui/material'
import propType from 'prop-types'
import { STATUS } from '../../constants/orderConstants'

export default function LabelStatus({ orderStatus }) {
  const orderStatusInfo = STATUS.get(orderStatus)
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: 10,
          color: orderStatusInfo.color,
          borderRadius: 1,
          width: 100,
          float: 'right',
        }}
      >
        {orderStatusInfo.label}
      </Typography>
    </Box>
  )
}
LabelStatus.propTypes = {
  orderStatus: propType.number.isRequired,
}
