import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import fileTreeSlice from "./features/fileTreeSlice";
// ...
const store = configureStore({
  // Root Reducer
  reducer: {
    // Slices
    fileTree: fileTreeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
