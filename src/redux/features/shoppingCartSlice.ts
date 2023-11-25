import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartProduct {
  id: number;
  talla: string;
  nombre: string;
  precio: string;
  img: string;
}


export interface shoppingCartState {
  user: string;
  productList: CartProduct[];
  total: number
}

const initialState: shoppingCartState = {
  user: '',
  productList: [],
  total: 0,
};

const calculateTotal = (productList: CartProduct[]) => {
  let total = 0;
  productList.forEach((product) => {
    total += parseInt(product.precio);
  });
  return total;
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    addProductToCart: (state, action: PayloadAction<CartProduct>) => {
      if (state.productList.find((product) => product.id === action.payload.id)) {
        return;
      }
      state.productList = [...state.productList, action.payload];
      state.total = calculateTotal(state.productList);
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      state.productList = state.productList.filter((product) => product.id !== action.payload);
      state.total = calculateTotal(state.productList);
    }
  },
});


export default shoppingCartSlice.reducer;
export const { setUser, addProductToCart, deleteProductFromCart } = shoppingCartSlice.actions;

