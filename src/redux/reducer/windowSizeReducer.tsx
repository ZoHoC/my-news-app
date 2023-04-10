import { createSlice } from "@reduxjs/toolkit";

const initialState: WindowSizeState = {
  windowWidth: 0,
};

const windowSizeSlice = createSlice({
  name: "windowSize",
  initialState,
  reducers: {
    setWindowWidth(state, action) {
      state.windowWidth = action.payload;
    },
  },
});

export interface WindowSizeState {
  windowWidth: number;
}

export default windowSizeSlice.reducer;
export const { setWindowWidth } = windowSizeSlice.actions;
