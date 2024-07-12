import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/dummyData";
const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct: JSON.parse(sessionStorage.getItem("oneItem")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      const filter = storeData.filter((item) => item.type === action.payload);
      state.filteredProducts = filter;
      const saveState = JSON.stringify(filter);
      sessionStorage.setItem("filteredData", saveState);
    },
    singleProduct(state, action) {
      const product = state.filteredProducts.filter(
        (product) => product.id === action.payload
      );
      state.singleProduct = product;
      const saveState = JSON.stringify(product);
      sessionStorage.setItem("oneItem", saveState);
    },
  },
});

export default productSlice;
export const { filterProducts, singleProduct } = productSlice.actions;
