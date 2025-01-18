import { configureStore } from "@reduxjs/toolkit";
import webpageHTMLReducer from "./slices/webpageHTMLSlice";

const store = configureStore({
  reducer: {
    // Add reducers here
    webpageHTML: webpageHTMLReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
