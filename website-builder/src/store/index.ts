import { configureStore } from "@reduxjs/toolkit";
import webpageHTMLReducer from "./slices/webpageHTMLSlice";
import webpageReducer from "./slices/webpageSlice";

const store = configureStore({
  reducer: {
    // Add reducers here
    webpageHTML: webpageHTMLReducer,
    webpage: webpageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
