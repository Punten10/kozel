import { createSlice } from "@reduxjs/toolkit";
// import { IAlerter } from 'entities/alerter/interfaces/Alerter';

interface AlerterState {
    alerts: any[];
}

const initialState: AlerterState = {
    alerts: [],
};

const alerterSlice = createSlice({
    name: "alerter",
    initialState,
    reducers: {
        addAlert: (state, action) => {
            state.alerts.push({
                ...action.payload,
                id: Math.random().toString(16).slice(2),
            });
        },
        removeAlert: (state, action) => {
            state.alerts = state.alerts.filter(
                (alert: { id: string }) => alert.id !== action.payload,
            );
        },
    },
});

export default alerterSlice.reducer;
export const { addAlert, removeAlert } = alerterSlice.actions;
