import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("get/getUser", async () => {
  return fetch("https://api.github.com/users/abdullahgumi").then((res) =>
    res.json()
  );
});

const initialState = {
  user: [],
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
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

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
