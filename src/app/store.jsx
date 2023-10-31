import { configureStore } from "@reduxjs/toolkit";
import savedReducer from "../features/saved"

export const store = configureStore({
  reducer: {saved:savedReducer},
});
