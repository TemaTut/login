import { configureStore } from "@reduxjs/toolkit";

const tempReducer = (state = {}) => state;

export const store = configureStore({
    reducer: {
        temp: tempReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
