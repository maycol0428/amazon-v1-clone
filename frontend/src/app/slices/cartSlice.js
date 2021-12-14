import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      let product = action.payload;
      const productExist = state.items.find((item) => item.id === product.id);
      if (productExist) {
        productExist.quantity = productExist.quantity + 1;
      } else {
        state.items = [...state.items, { quantity: 1, ...action.payload }];
      }
    },
    removeitemCart: (state, action) => {
      let id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    resetCart: (state, action) => initialState,
  },
});

export const totalItems = (items) => {
  return items.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);
};
export const totalPrice = (items) => {
  return items.reduce((acc, item) => {
    return (acc += item.quantity * item.price);
  }, 0);
};
// Action creators are generated for each case reducer function
export const { updateCart, resetCart, removeitemCart } = cartSlice.actions;
export const cartSelector = (state) => state.cart;

export default cartSlice.reducer;
