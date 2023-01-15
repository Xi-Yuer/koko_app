import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      state.temOrders = action.payload;
    },
    clearTemOrder(state) {
      state.temOrders = [];
    },
  },
});
