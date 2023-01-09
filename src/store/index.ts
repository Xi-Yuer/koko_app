import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import cache from "../utils/cache";

const detail = cache.get("USER_DETAIL");
const token = cache.get("USER_TOKEN");

const initState = {
  detail,
  token,
};

const userReducer = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.detail = action.payload.data;
      state.token = action.payload.token;
      cache.set("USER_DETAIL", state.detail);
      cache.set("USER_TOKEN", state.token);
    },
  },
});

const store = configureStore({
  reducer: {
    user: userReducer.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { setUser } = userReducer.actions;
export default store;
