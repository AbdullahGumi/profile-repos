import { configureStore } from "@reduxjs/toolkit";
import repositoriesReducer from "../redux/repositories/repositoriesSlice";
import userReducer from "../redux/user/userSlice";
export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    user: userReducer,
  },
});
