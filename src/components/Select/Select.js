import { MenuItem, Select as SelectMui } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import propType from "prop-types"
import { dataActions } from "../../redux/dataSlice"

function Select({ index }) {
  const dispatch = useDispatch()
  const options = useSelector((state) => state.data.options)
  const handleChange = (e, indexHeader) => {
    dispatch(
      dataActions.setMapping({ index: indexHeader, fieldMapping: e.target.value })
    )
  }
  const isOptionHasValue = options?.length
  if (!isOptionHasValue) return null
  return (
    <SelectMui
      sx={{ width: 200 }}
      displayEmpty
      defaultValue=""
      onChange={(e) => handleChange(e, index)}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options.map((item, key) => (
        <MenuItem key={key} value={item.key} disabled={item.disabled}>
          {item.name}
        </MenuItem>
      ))}
    </SelectMui>
  )
}

export default Select
Select.propTypes = {
  index: propType.number.isRequired,
}
