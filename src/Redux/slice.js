import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, actions) => {
      state.item.push(actions.payload);
      localStorage.setItem("cart", JSON.stringify(state.item));
    },
    removeItem: (state, actions) => {
      let cartData = JSON.parse(localStorage.getItem("cart")).filter(
        (item) => item.id != actions.payload.id,
      );
      state.item = cartData;
      localStorage.setItem("cart", JSON.stringify(cartData));
      console.log(cartData);
    },
    clearCart: (state) => {
      state.item = [];
      // ensure we store a valid JSON array string rather than an
      // implicit `` string that results from passing an array directly
      localStorage.setItem("cart", JSON.stringify([]));
    },
    updateQuant: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.item.find((i) => i.id === id);

      if (item) {
        item.quantity = quantity > 1 ? quantity : 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.item));
    },
  },
});

export const { addItems, removeItem, clearCart, updateQuant } =
  addToCart.actions;
export default addToCart.reducer;
