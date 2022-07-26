import { createSlice } from "@reduxjs/toolkit"
import { STEPS } from "../constants/formConstants"

const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 0,
    data: {
      firstName: "",
      middleName: "",
      lastName: "",
      birthday: "",
      iDcard: "",
      phoneNumber: "",
      monthlySaving: "",
      relationShip: "",
      beneficiaryFirstName: "",
      beneficiaryMiddleName: "",
      beneficiaryLastName: "",
      beneficiaryBirthday: "",
      beneficiaryIDcard: "",
      beneficiaryPhoneNumber: "",
    },
  },
  reducers: {
    setData: (state, { payload: { fieldName, value } }) => {
      state.data[fieldName] = value
    },
    goNext: (state) => {
      if (state.step === STEPS.length - 1) return
      state.step += 1
    },
    goPrev: (state) => {
      if (state.step === 0) return
      state.step -= 1
    },
  },
})

export const formActions = formSlice.actions
export default formSlice.reducer
