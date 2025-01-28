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
    backgroundColor: string;
    href: string;
  }

interface Webpage {
    id: number;
    name: string;
    webpage: WebpageElement[];
}

interface WebpageState {
    webpages: Webpage[];
}

const initialState: WebpageState = {
    webpages: [],
}

const webpageSlice = createSlice({
    name: "webpage",
    initialState,
    reducers: {
        addWebpage: (state: WebpageState, action: PayloadAction<Webpage>) => { // Adds webpage to the saved webpages
            state.webpages.push(action.payload);
        },
        removeWebpage: (state: WebpageState, action: PayloadAction<number>) => { // Removes webpage using an id
            state.webpages.filter((webpage) => webpage.id !== action.payload);
        }
    }
})

export const { addWebpage, removeWebpage } = webpageSlice.actions;
export default webpageSlice.reducer;