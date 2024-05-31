import { createSlice } from "@reduxjs/toolkit";

type Nav =
    | "dashboard"
    | "settings"
    | "profile"
    | "notifications"
    | "wallets"
    | "transactions"
    | "contributors"
    | "analytics";

interface NavigationState {
    nav: Nav;
    history: string[];
}

const initialState: NavigationState = {
    nav: "dashboard",
    history: [],
};

const navSlice = createSlice({
    name: "alerter",
    initialState,
    reducers: {
        setNav: (state, action) => {
            state.nav = action.payload;
            state.history.push(action.payload);
        },
    },
});

export default navSlice.reducer;
export const { setNav } = navSlice.actions;
