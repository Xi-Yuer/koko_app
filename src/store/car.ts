import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  checked: any[];
}

const initState: IState = {
  checked: [],
};

export const carReducer = createSlice({
  name: "car",
  initialState: initState,
  reducers: {
    addCar(state, action: PayloadAction<any>) {
      state.checked.push(action.payload);
    },
    delCar(state, action: PayloadAction<any>) {
      const id = action.payload;
      const tem = state.checked.filter((i) => i.id != id);
      state.checked = tem;
    },
  },
});
