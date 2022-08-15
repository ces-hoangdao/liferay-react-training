import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllForChart } from '../../services/ordersService'
import { STATUS } from '../../constants/orderConstants'

ChartJS.register(ArcElement, Tooltip, Legend)

function PieChart() {
  const filter = useSelector((state) => state.table.filter)
  const [chartLabels, setChartLabels] = useState([])
  const [chartData, setChartData] = useState([])
  const [chartColors, setChartColors] = useState([])

  // counts the number of orders in each status
  useEffect(() => {
    const LABELS = []
    const DATA = []
    const backgroundColors = []
    getAllForChart({ filter }).then((res) => {
      res.data.items.forEach((order) => {
        if (!LABELS.includes(order.orderStatusInfo.label_i18n)) {
          LABELS.push(order.orderStatusInfo.label_i18n)
          DATA.push(1)
          backgroundColors.push(STATUS.get(order.orderStatusInfo.code).color)
        } else {
          const index = LABELS.indexOf(order.orderStatusInfo.label_i18n)
          DATA[index] += 1
        }
      })
      setChartLabels(LABELS)
      setChartData(DATA)
      setChartColors(backgroundColors)
    })
  }, [filter])
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: '# of Votes',
        data: chartData,
        backgroundColor: chartColors,
        borderColor: chartColors,
      },
    ],
  }

  return !chartLabels?.lenght ? (
    <Box>
      <Pie data={data} />{' '}
      <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2 }}>
        Bar Chart
      </Typography>
    </Box>
  ) : null
}

export default PieChart
