import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WebpageElement {
  id: number;
  element: string;
  children: WebpageElement[];
  innerText: string;
  display: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  visibility: string;
  position: string;
  width: string;
  height: string;
  textSize: string;
  textColor: string;
  textAlignment: string;
  backgroundColor: string;
  href: string;
}

interface Webpage {
  id: number;
  name: string;
  webpage: WebpageElement[];
  color: string;
}

interface WebpageState {
  webpages: Webpage[];
}

const initialState: WebpageState = {
  webpages: localStorage.getItem("webpages")
    ? JSON.parse(localStorage.getItem("webpages") as string)
    : [],
};

const webpageSlice = createSlice({
  name: "webpage",
  initialState,
  reducers: {
    addWebpage: (state: WebpageState, action: PayloadAction<Webpage>) => {
      // Adds webpage to the saved webpages
      state.webpages.push(action.payload);
      localStorage.setItem("webpages", JSON.stringify(state.webpages));
    },
    removeWebpage: (state: WebpageState, action: PayloadAction<number>) => {
      // Removes webpage using an id
      const newState = state.webpages.filter(
        (webpage) => webpage.id !== action.payload
      );
      state.webpages = newState;
      localStorage.setItem("webpages", JSON.stringify(state.webpages));
    },
    updateWebpage: (state: WebpageState, action: PayloadAction<Webpage>) => {
      // Updates a specific webpage using an id
      const newState = state.webpages.map((webpage) =>
        webpage.id === action.payload.id ? action.payload : webpage
      );
      state.webpages = newState;
      localStorage.setItem("webpages", JSON.stringify(state.webpages));
    },
  },
});

export const { addWebpage, removeWebpage, updateWebpage } =
  webpageSlice.actions;
export default webpageSlice.reducer;
