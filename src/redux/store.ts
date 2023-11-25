import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartSlice } from "./features/shoppingCartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
