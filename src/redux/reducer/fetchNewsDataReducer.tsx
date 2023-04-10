import { createSlice } from "@reduxjs/toolkit";
import { fetchNewsData } from "../actions/fetchNewsDataAction";

const initialState: NewsState = {
  newsData: [],
  isLoading: false,
  error: null,
};

const fetchNewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNewsData.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.newsData = action.payload.results.map((item: fetchItem) => {
          const {
            id,
            published_date,
            byline,
            section,
            title,
            media: [
              {
                caption: imageCaption,
                "media-metadata": [, , { url: imageUrl }],
              },
            ],
          } = item;
          return {
            id,
            publishedDate: published_date,
            author: byline,
            section,
            title,
            imageCaption,
            imageUrl,
          };
        });
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
  id: string;
  published_date: string;
  byline: string;
  section: string;
  title: string;
  abstract: string;
  media: Media[];
}

interface Media {
  "media-metadata": MediaMetadata[];
  caption: string;
}

interface MediaMetadata {
  url: string;
}

export interface NewsItem {
  id: string;
  publishedDate: string;
  author: string;
  section: string;
  title: string;
  abstract: string;
  imageCaption: string;
  imageUrl: string;
}

export interface NewsState {
  newsData: NewsItem[];
  isLoading: boolean;
  error: string | null;
}

export default fetchNewsSlice.reducer;
