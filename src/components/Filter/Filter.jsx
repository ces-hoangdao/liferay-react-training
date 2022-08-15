import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import AccountPicker from './AccountPicker'
import DateRangePicker from './DateRangePicker'
import { convertQuery } from '../../helper/queryHelper'
import { tableActions } from '../../redux/tableSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const [selected, setSelected] = useState([])
  const isDisabled = selected.length === 0 && endDate === null
  const addFilter = () => {
    const query = convertQuery({ selected, startDate, endDate })
    dispatch(tableActions.setFilter(query))
  }
  return (
    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', marginBottom: 2 }}>
      <AccountPicker setSelected={setSelected} />
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
      />
      <Button
        sx={{ minWidth: 180, padding: 1.5 }}
        variant="contained"
        onClick={addFilter}
        disabled={isDisabled}
      >
        Add Filter
      </Button>
    </Box>
  )
}

export default Filter
