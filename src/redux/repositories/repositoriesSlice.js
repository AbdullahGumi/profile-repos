import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRepositories = createAsyncThunk(
  "get/getRepositories",
  async () => {
    return fetch("https://api.github.com/users/abdullahgumi/repos").then(
      (res) => res.json()
    );
  }
);

const initialState = {
  repos: [],
  status: null,
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  extraReducers: {
    [getRepositories.pending]: (state) => {
      state.status = "loading";
    },
    [getRepositories.fulfilled]: (state, { payload }) => {
      state.repos = payload;
      state.status = "success";
    },
    [getRepositories.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } =
//   repositoriesSlice.actions;

export default repositoriesSlice.reducer;
