import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import shoppingCartReducer from "./features/shoppingCartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    user: userReducer,
  }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
