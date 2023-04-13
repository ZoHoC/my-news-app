import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewsData = createAsyncThunk(
  "news/fetchNewsData",
  async (args: ArgsItems) => {
    const { section, limit, offset } = args;

    const response = await fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/${section}.json?limit=${limit}&offset=${offset}&api-key=X6yRTjbIa4ZVnpAgSp7Fd8XuGYqE46dY`
    );
    const data = await response.json();
    return data;
  }
);

interface ArgsItems {
  section: string;
  limit: number;
  offset: number;
}
