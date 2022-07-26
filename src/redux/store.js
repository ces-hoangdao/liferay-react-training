import { configureStore } from "@reduxjs/toolkit"
import form from "./formSlice"

const store = configureStore({
  reducer: {
    form,
  },
})

export default store
