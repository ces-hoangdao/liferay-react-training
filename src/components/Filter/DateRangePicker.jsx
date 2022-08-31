import DatePicker from 'react-datepicker'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'

const DateRangePicker = ({ startDate, endDate, setEndDate, setStartDate }) => {
  const today = new Date()
  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Box>
      <DatePicker
        selected={today}
        onChange={onChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        selectsRange
        maxDate={today}
      />
    </Box>
  )
}

export default DateRangePicker

DateRangePicker.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.func.isRequired,
  setStartDate: PropTypes.func.isRequired,
}

DateRangePicker.defaultProps = {
  endDate: null,
}
