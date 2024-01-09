import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState: {
    visible: false,
  },
  reducers: {
    toggleLoginModal: (state) => {
      const newState = { ...state };
      state.visible = !newState.visible;
      return state;
    },
  },
});

export default loginModalSlice.reducer;
export const { toggleLoginModal } = loginModalSlice.actions;
