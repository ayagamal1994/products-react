import { createSlice } from "@reduxjs/toolkit";
const storedCart = JSON.parse(localStorage.getItem("cartProducts")) || [];

const initialState = {count:0, cartProducts:storedCart};

export const ProductCountSlice = createSlice({
  name: "productCount",
  initialState,
  reducers: {

    increase: (state, action) => {
      const existing = state.cartProducts?.find(
        (p) => p.id === action.payload.id
      );

      if (existing) {
        if (existing.count < action.payload.stock) {
          state.cartProducts = state.cartProducts?.map((p) =>
            p.id === action.payload.id ? { ...p, count: p.count + 1 } : p
          );
        }
      } else {
        state.cartProducts = [
          ...state.cartProducts,
          { ...action.payload, count: 1 },
        ];
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    decrease: (state, action) => {
      const existing = state.cartProducts?.find(
        (p) => p.id === action.payload.id
      );

      if (!existing) return;

      if (existing.count > 1) {
        state.cartProducts = state.cartProducts.map((p) =>
          p.id === action.payload.id ? { ...p, count: p.count - 1 } : p
        );
      } else if (existing.count === 1) {
        state.cartProducts = state.cartProducts.filter(
          (p) => p.id !== action.payload.id
        );
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter((p) => p.id !== action.payload.id);
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    }
  },
});

export const getCount = (state, id)=>{
    const existing = state.productCount?.cartProducts?.find(
        (p)=>p?.id === id
    );
    return existing?existing.count:0
}

export const totalCount = (state) => {
  return state.productCount?.cartProducts?.reduce(
    (total, p) => total + p.count,
    0
  );
};

export const {increase, decrease, removeFromCart} = ProductCountSlice.actions;
export const productCountReducer = ProductCountSlice.reducer;