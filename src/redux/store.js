import { configureStore } from '@reduxjs/toolkit'
import table from './tableSlice'
import form from './formSlice'

const store = configureStore({
  reducer: {
    table,
    form,
  },
})

export default store
