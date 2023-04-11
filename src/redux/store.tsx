import { combineReducers, configureStore } from "@reduxjs/toolkit";
import windowSizeReducer, {
  WindowSizeState,
} from "./reducer/windowSizeReducer";
import fetchNewsDataReducer, {
  NewsState,
} from "./reducer/fetchNewsDataReducer";
import navDataReducer, { NavDataState } from "./reducer/navDataReducer";

const rootReducer = combineReducers({
  windowSize: windowSizeReducer,
  news: fetchNewsDataReducer,
  navData: navDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export interface RootState {
  windowSize: WindowSizeState;
  news: NewsState;
  navData: NavDataState;
}

export default store;

export type AppDispatch = typeof store.dispatch;
