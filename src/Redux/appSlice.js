import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  UserInfo: null,
};

export const appSlice = createSlice({
  name: "Ecommerce",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.products.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    setUser: (state, action) => {
      state.UserInfo = action.payload;
    },
    logOutUser: (state) => {
      state.UserInfo = null;
      state.products = []; // يمكن إفراغ السلة عند تسجيل الخروج
    },
    incrementQuantity: (state, action) => {
      const item = state.products.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.products.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.products = [];
    },
    deleteFromCart: (state, action) => {
    // تأكد أن state.products موجودة وهي مصفوفة
    if (Array.isArray(state.products)) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    }
  },


  }
});

export const {
  addToCart,
  removeFromCart,
  setUser,
  logOutUser,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  deleteFromCart,
  
} = appSlice.actions;

export default appSlice.reducer;