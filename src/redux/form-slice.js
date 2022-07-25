import { createSlice } from "@reduxjs/toolkit";
import { STEP_FOUR, STEP_ONE } from "../constants/StepConstants";

const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 1,
    data: {
      firstName: "",
      middleName: "",
      lastName: "",
      birthday: "",
      IDcard: "",
      phoneNumber: "",
      monthlySaving: "",
      relationShip: "spouse",
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
      state.data[fieldName] = value;
    },
    goNext: (state) => {
      if (state.step === STEP_FOUR) return;
      state.step += 1;
    },
    goPrev: (state) => {
      if (state.step === STEP_ONE) return;
      state.step -= 1;
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;
