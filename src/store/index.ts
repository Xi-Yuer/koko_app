import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { carReducer } from "./car";
import { orderReducer } from "./order";

const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    car: carReducer.reducer,
    order: orderReducer.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { setUser, getUserAddressAction } = userReducer.actions;
export const { addCar, delCar, clearCar, edit } = carReducer.actions;
export const { addTemOrder, clearTemOrder } = orderReducer.actions;
export default store;
