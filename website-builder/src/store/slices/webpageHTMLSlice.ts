import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Webpage elements are just HTML elements but with a different name to avoid naming conflicts

interface WebpageElement {
  id: number;
  element: string;
  children: string[];
  innerText: string;
}

interface WebpageHTMLState {
  html: WebpageElement[];
}

const initialState: WebpageHTMLState = {
  html: [],
};

const webpageHTMLSlice = createSlice({
  name: "webpageHTML",
  initialState,
  reducers: {
    addHTMLElement: (
      state: WebpageHTMLState,
      action: PayloadAction<WebpageElement>
    ) => {
      state.html.push(action.payload);
    },
    removeHTMLElement: (
      state: WebpageHTMLState,
      action: PayloadAction<number>
    ) => {
      state.html = state.html.filter(
        (element) => element.id !== action.payload
      );
    },
  },
});

export const { addHTMLElement, removeHTMLElement } = webpageHTMLSlice.actions;
export default webpageHTMLSlice.reducer;
