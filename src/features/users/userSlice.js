import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: { firstname: "", lastname: "", email: "", password: "" },
  reducers: {
    addFirstName: (state, action) => {
      state.firstname = action.payload;
    },
    addLastName: (state, action) => {
      state.lastname = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { addFirstName, addLastName, addEmail, addPassword } =
  userSlice.actions;
export default userSlice.reducer;
