import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import AccountPicker from './AccountPicker'
import DateRangePicker from './DateRangePicker'
import { convertQuery } from '../../helper/queryHelper'
import { tableActions } from '../../redux/tableSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.table.filter)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const [selected, setSelected] = useState([])
  const isDisabled = selected.length === 0 && endDate === null
  const isDisabledClear = !filter?.length
  const addFilter = () => {
    const query = convertQuery({ selected, startDate, endDate })
    dispatch(tableActions.setFilter(query))
  }
  const removeFilter = () => {
    setEndDate(null)
    setSelected([])
    setStartDate(new Date())
    dispatch(tableActions.setFilter(''))
  }
  return (
    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', marginBottom: 2 }}>
      <AccountPicker setSelected={setSelected} selected={selected} />
      <DateRangePicker startDate={startDate} endDate={endDate} setEndDate={setEndDate} setStartDate={setStartDate} />

      <Button
        sx={{ minWidth: 180, padding: 1.9 }}
        variant="contained"
        color="warning"
        onClick={removeFilter}
        disabled={isDisabledClear}
      >
        Clear
      </Button>
      <Button sx={{ minWidth: 180, padding: 1.9 }} variant="contained" onClick={addFilter} disabled={isDisabled}>
        Add Filter
      </Button>
    </Box>
  )
}

export default Filter
