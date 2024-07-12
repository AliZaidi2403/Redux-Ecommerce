import { configureStore } from "@reduxjs/toolkit";
import { sliderSlice } from "../features/SliderSlice";
import productSlice from "../features/productsSlice";
const store = configureStore({
  reducer: {
    slider: sliderSlice.reducer,
    products: productSlice.reducer,
  },
});
export default store;
