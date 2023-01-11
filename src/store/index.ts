import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { carReducer } from "./car";

const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    car: carReducer.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { setUser } = userReducer.actions;
export const { addCar, delCar, clearCar, edit } = carReducer.actions;
export default store;
