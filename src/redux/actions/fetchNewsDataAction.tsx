import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewsData = createAsyncThunk(
  "news/fetchNewsData",
  async args => {
    const response = await fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?limit=500&api-key=X6yRTjbIa4ZVnpAgSp7Fd8XuGYqE46dY`
    );
    const data = await response.json();
    return data;
  }
);
