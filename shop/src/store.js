import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "YOOYONGHYUN",
  reducers: {
    changeName() {
      return "YOO";
    },
  },
});

export let { changeName } = user.actions;

let product = createSlice({
  name: "product",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      let idx = state.findIndex((a) => a.id === action.payload);
      state[idx].count++;
    },
    addProduct(state, action) {
      return [...state, action.payload];
    },
    minusProduct(state, action) {
      let idx = state.findIndex((a) => a.id === action.payload);
      state[idx].count--;
    },
    removeProduct(state, action) {
      let remove = state.filter((a) => a.id !== action.payload);
      return remove;
    },
    // removeProduct(state, action) {

    // }
  },
});

export let { changeCount, addProduct, minusProduct, removeProduct } =
  product.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    product: product.reducer,
  },
});
