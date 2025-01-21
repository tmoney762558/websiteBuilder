import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Webpage elements are just HTML elements but with a different name to avoid naming conflicts

interface WebpageElement {
  id: number;
  element: string;
  children: WebpageElement[];
  innerText: string;
  styles: string;
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
    setWebpageHTML(state, action: PayloadAction<WebpageElement[]>) {
      state.html = action.payload;
    },
  },
});

export const { addHTMLElement, setWebpageHTML } = webpageHTMLSlice.actions;
export default webpageHTMLSlice.reducer;
