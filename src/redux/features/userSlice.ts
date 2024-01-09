import { createSlice } from "@reduxjs/toolkit";
import { Usuario } from "../../interfaces/Usuarios";

const emptyUser:Usuario = {
  isAuth: false,
  email: '',
  password: '',
  nombres: '',
  apellidos: '',
}
const initialState = () => {
  const persistentUser = localStorage.getItem('_Neotaller_user');
  return persistentUser ? JSON.parse(persistentUser) : emptyUser;
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state = {... action.payload}
      localStorage.setItem('_Neotaller_user', JSON.stringify(state));
      console.log(state);
      return state;
    },
    logout: (state) => {
      state = initialState;
      console.log(state);
      localStorage.removeItem('_Neotaller_user')
      localStorage.removeItem('token')
      return state;
    }
  }
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;