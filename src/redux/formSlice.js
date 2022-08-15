import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  },
  reducers: {
    setData: (state, { payload: { fieldName, value } }) => {
      state.data[fieldName] = value
    },
  },
})

export const formActions = formSlice.actions
export default formSlice.reducer
