import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchNewsData } from "../actions/fetchNewsDataAction";
import { nanoid } from "nanoid";

const initialState: NewsState = {
  newsData: [],
  isLoading: false,
  error: null,
};

const fetchNewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<string>) => {
      const selectedId = action.payload;
      state.newsData = state.newsData.map(article => ({
        ...article,
        isFavourite:
          article.id === selectedId
            ? !article.isFavourite
            : article.isFavourite,
      }));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNewsData.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        const articles = action.payload.results.map((item: fetchItem) => {
          const { published_date, byline, section, title, multimedia } = item;
          return {
            publishedDate: published_date,
            author: byline,
            section,
            title,
            // returns the url/caption property of the third element of the multimedia array if it exists, and if not, returns null.
            imageUrl: multimedia?.[2]?.url ?? null,
            imageCaption: multimedia?.[2]?.caption ?? null,
            isFavourite: false,
            id: nanoid(),
          };
        });
        state.newsData = [...state.newsData, ...articles];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

interface fetchItem {
  published_date: string;
  byline: string;
  section: string;
  title: string;
  abstract: string;
  multimedia: Media[];
}

interface Media {
  url: string;
  caption: string;
}

export interface NewsItem {
  publishedDate: string;
  author: string;
  section: string;
  title: string;
  abstract: string;
  imageUrl: string;
  imageCaption: string;
  isFavourite: boolean;
  id: string;
}

export interface NewsState {
  newsData: NewsItem[];
  isLoading: boolean;
  error: string | null;
}

export default fetchNewsSlice.reducer;
export const { toggleFavourite } = fetchNewsSlice.actions;
