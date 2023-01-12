import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cache from "../utils/cache";

const detail = cache.get("USER_DETAIL");
const token = cache.get("USER_TOKEN");
const address = cache.get("USER_ADDRESS");

const initState = {
  detail,
  token,
  address,
};

export const userReducer = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.detail = action.payload.data;
      state.token = action.payload.token;
      cache.set("USER_DETAIL", state.detail);
      cache.set("USER_TOKEN", state.token);
    },

    getUserAddressAction(state, action: PayloadAction<any>) {
      state.address = action.payload;
      cache.set("USER_ADDRESS", state.address);
    },
  },
});
