import { combineReducers, configureStore } from "@reduxjs/toolkit";
import windowSizeReducer, {
  WindowSizeState,
} from "./reducer/windowSizeReducer";
import fetchNewsDataReducer, {
  NewsState,
} from "./reducer/fetchNewsDataReducer";

const rootReducer = combineReducers({
  windowSize: windowSizeReducer,
  news: fetchNewsDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export interface RootState {
  windowSize: WindowSizeState;
  news: NewsState;
}

export default store;

export type AppDispatch = typeof store.dispatch;
