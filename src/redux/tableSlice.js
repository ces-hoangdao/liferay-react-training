import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_PAGESIZE = 5
const tableSlice = createSlice({
  name: 'table',
  initialState: {
    page: 0,
    pageSize: DEFAULT_PAGESIZE,
    totalCount: 0,
    filter: '',
  },
  reducers: {
    setTotalCount: (state, action) => {
      state.totalCount = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    changeRowPerPage: (state, action) => {
      state.pageSize = action.payload
      state.page = 0
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const tableActions = tableSlice.actions
export default tableSlice.reducer
