import { configureStore } from "@reduxjs/toolkit";
import { sliderSlice } from "../features/SliderSlice";
const store = configureStore({
  reducer: {
    slider: sliderSlice.reducer,
  },
});
export default store;
