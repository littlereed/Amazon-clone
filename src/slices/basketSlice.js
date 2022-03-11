import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
//payload就是basketSlice中addToBasket(product)的product
export const basketSlice = createSlice({
  name:'basket',
  initialState,
  reducers: {
    //actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];

      if(index >= 0) {
        //The item exists in the basket ..., remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can not product (id: ${action.payload.id}) as its in`
        )
      };
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket} = basketSlice.actions;
//Selecetors - This is we pull information from the Global stor slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => 
  state.basket.items.reduce((total, item) => total + item.price, 0)
//we have a total which starts at a price of zero 
//reduce which we're iterating through all the items in the list
//add on the item price to the total然后就是total,可以再加item price,形成新的total
export default basketSlice.reducer;