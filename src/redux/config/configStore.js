// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/calculatorSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
