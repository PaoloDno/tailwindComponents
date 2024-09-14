import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../reducers/bookmarkReducer";
import sidebarReducer from "../reducers/sidebarReducer";
import themeReducer from "../reducers/themeReducer";

const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    sidebar: sidebarReducer,
    theme: themeReducer
  },
});

export default store;
