import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewsData = createAsyncThunk(
  "news/fetchNewsData",
  async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=X6yRTjbIa4ZVnpAgSp7Fd8XuGYqE46dY`
    );
    const data = await response.json();
    return data;
  }
);
