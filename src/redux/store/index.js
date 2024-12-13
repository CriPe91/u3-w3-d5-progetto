import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/reducer";

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;
