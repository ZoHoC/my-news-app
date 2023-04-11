import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

const initialState: NavDataState = {
  navData: [
    {
      id: 1,
      title: "Home",
      link: "/",
      isPressed: true,
    },
    {
      id: 2,
      title: "General",
      link: "/general",
      isPressed: false,
    },
    {
      id: 3,
      title: "Business",
      link: "/buisness",
      isPressed: false,
    },
    {
      id: 4,
      title: "Health",
      link: "/health",
      isPressed: false,
    },
    {
      id: 5,
      title: "Science",
      link: "/science",
      isPressed: false,
    },
    {
      id: 6,
      title: "Sports",
      link: "/sports",
      isPressed: false,
    },
    {
      id: 7,
      title: "Technology",
      link: "/technology",
      isPressed: false,
    },
    {
      id: 8,
      title: "Favourite",
      link: "/favourite",
      isPressed: false,
    },
  ],
};

const navDataSlice = createSlice({
  name: "navData",
  initialState,
  reducers: {
    toggleChoice: (state, action: PayloadAction<number>) => {
      const selectedId = action.payload;
      state.navData = state.navData.map(item => ({
        ...item,
        isPressed: item.id === selectedId ? true : false,
      }));
    },
  },
});
export interface NavDataState {
  navData: NavDataItem[];
}

export interface NavDataItem {
  id: number;
  icon?: ReactNode;
  title: string;
  link: string;
  isPressed: boolean;
}

export default navDataSlice.reducer;
export const { toggleChoice } = navDataSlice.actions;
