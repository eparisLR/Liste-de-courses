import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Recipe } from "../../modules/recipes/recipes.types";

// Define a type for the slice state
export interface CartState {
  recipes: Recipe[];
}

// Define the initial state using that type
const initialState: CartState = {
  recipes: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Recipe>) => {
      console.log("RECIPE ADDED", action.payload);
      state.recipes.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
