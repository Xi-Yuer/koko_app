import cache from "@/utils/cache";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Taro from "@tarojs/taro";

interface IState {
  temOrders: any[];
}

const initState: IState = {
  temOrders: [],
};

export const orderReducer = createSlice({
  name: "order",
  initialState: initState,
  reducers: {
    addTemOrder(state, action: PayloadAction<any>) {
      const token = cache.get("USER_TOKEN");
      if (!token) {
        Taro.showToast({
          title: "请先登录",
          icon: "error",
        });
        return;
      }
      state.temOrders = action.payload;
    },
    clearTemOrder(state) {
      state.temOrders = [];
    },
  },
});
