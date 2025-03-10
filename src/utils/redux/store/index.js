import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../event/reducer";

export const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});
