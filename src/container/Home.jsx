import { Box } from '@mui/material'
import Chart from '../components/Chart'
import TableList from '../components/TableList'
import Filter from '../components/Filter'

export default function Home() {
  return (
    <Box sx={{ display: 'flex', gap: 5 }}>
      <Box sx={{ width: 400 }}>
        <Chart />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'inherit',
          flexDirection: 'column',
          gap: 4,
          padding: 5,
        }}
      >
        <Filter />
        <TableList />
      </Box>
    </Box>
  )
}
