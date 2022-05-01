import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { getState }) => {
    const state = getState();
    return fetch(`https://api.github.com/users/${state.user.user.login}`).then(
      (res) => res.json()
    );
  }
);

const initialState = {
  isLogged: JSON.parse(localStorage.getItem("isLogged")) || false,
  user: JSON.parse(localStorage.getItem("user")) || [],
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("payload:", action.payload);
      localStorage.setItem(
        "isLogged",
        JSON.stringify(action.payload.isUserLogged)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.isLogged = true;
      state.user = action.payload.user;
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.status = "loading";
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.status = "success";
    },
    [getUser.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
