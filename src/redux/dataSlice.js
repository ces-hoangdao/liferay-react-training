import { createSlice } from "@reduxjs/toolkit"
import { PRODUCT_FIELD_MAPPING, MAPPING } from "../constants/constants"

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    headers: [],
    mapping: MAPPING,
    options: PRODUCT_FIELD_MAPPING,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setHeaders: (state, action) => {
      state.headers = action.payload
    },
    setMapping: (state, action) => {
      state.mapping[action.payload.index].fieldMapping = action.payload.fieldMapping
      state.options.forEach((item) => {
        item.disabled = state.mapping.some((item2) => {
          return item.key === item2.fieldMapping
        })
      })
    },
  },
})

export const dataActions = dataSlice.actions
export default dataSlice.reducer
