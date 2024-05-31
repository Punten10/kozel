import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alerterReducer from "@/app/store/slices/alerter.slice.ts";
import userReducer from "@/app/store/slices/user.slice.ts";
import navigationReducer from "@/app/store/slices/navigation.slice.ts";
// import { baseApi } from "@/shared/api/rest";

export const store = configureStore({
    reducer: combineReducers({
        alerter: alerterReducer,
        user: userReducer,
        navigation: navigationReducer,
        // [baseApi.reducerPath]: baseApi.reducer,
    }),
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware().concat(baseApi.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
