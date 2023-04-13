import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchNewsDataReducer, {
  NewsState,
} from "./reducer/fetchNewsDataReducer";
import navDataReducer, { NavDataState } from "./reducer/navDataReducer";

const rootReducer = combineReducers({
  news: fetchNewsDataReducer,
  navData: navDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export interface RootState {
  news: NewsState;
  navData: NavDataState;
}

export default store;

export type AppDispatch = typeof store.dispatch;
