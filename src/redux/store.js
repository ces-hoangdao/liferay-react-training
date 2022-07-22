import { configureStore } from "@reduxjs/toolkit";
import form from './form-slice';

const store = configureStore({
    reducer: {
     form: form
    }
});

export default store;