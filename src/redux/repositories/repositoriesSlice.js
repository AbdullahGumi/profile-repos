import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRepositories = createAsyncThunk(
  "repositories/getRepositories",
  async (_, { getState }) => {
    const state = getState();
    return fetch(
      `https://api.github.com/users/${state.user.user.login}/repos`
    ).then((res) => res.json());
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

export default repositoriesSlice.reducer;
