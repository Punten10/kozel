import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    id: number;
    telegram_id: number;
    logo: string;
    join_date: string;
}

const initialState: IUser = {
    id: 0,
    telegram_id: 0,
    logo: "",
    join_date: "",
};

const mediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {
        // set user all data
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },

        resetData: () => {
            // This sets the state back to an empty object or the initial state
            return initialState; // Or alternatively, {}
        },
    },
});

export default mediaSlice.reducer;
export const { setUser, resetData } = mediaSlice.actions;
