import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  checked: any[];
  isEdit: boolean;
}

const initState: IState = {
  checked: [],
  isEdit: true,
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
    clearCar(state) {
      state.checked = [];
    },
    edit(state, action: PayloadAction<boolean>) {
      state.isEdit = action.payload;
    },
  },
});
