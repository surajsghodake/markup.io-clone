import { configureStore, createSlice } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

const markupStore = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["post/addInitialPosts"], // Ignore specific actions
        ignoredPaths: ["post"], // Ignore specific paths in the state
      },
    }),
});

export default markupStore;
