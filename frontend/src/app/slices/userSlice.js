import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  auth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.auth = true;
    },
    removeUser: (state, action) => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;
export const userSelector = (state) => state.user;

export default userSlice.reducer;
