import { createSlice } from "@reduxjs/toolkit";
import { IGroup, IWallet } from "@/pages/sub/Wallets/interfaces.tsx";

interface IWallets {
    wallets: IWallet[];
    groups: IGroup[];
}

const initialState: IWallets = {
    wallets: [
        {
            isConnected: true,
            address: "0x2d1cc54da76ee2af14b289527cd026b417764fab",
            balance: "0.23",
            isDisabled: false,
            type: "evm",
            phrase: null,
            label: "Aero Wallet",
            ens: null,
            group: ["default", "g_one"],
        },
        {
            isConnected: true,
            address: "0x45B6cEBF3528fC8A52657E73b7dEDAfe122c1308",
            balance: "0.23",
            isDisabled: false,
            type: "evm",
            phrase: null,
            label: null,
            ens: null,
            group: [],
        },
    ],
    groups: [
        {
            value: "default",
            label: "Default Group",
        },
        {
            value: "personal",
            label: "Personal Group",
        },
        {
            value: "work",
            label: "Work Group",
        },
        {
            value: "g_one",
            label: "Group One",
        },
        {
            value: "g_two",
            label: "Group Two",
        },
    ],
};

const walletSlice = createSlice({
    name: "wallets",
    initialState,
    reducers: {
        // remove all the wallets
        removeAllWallets: state => {
            state.wallets = [];
        },
        // add a wallet
        addWallet: (state, action) => {
            const exists = state.wallets?.some(
                wallet => wallet.address === action.payload.address,
            );
            if (!exists) {
                state.wallets?.push(action.payload);
            }
        },
        // remove a wallet
        removeWallet: (state, action) => {
            state.wallets = state.wallets?.filter(
                wallet => wallet.address !== action.payload,
            );
        },
        // update a wallet
        updateWallet: (state, action) => {
            state.wallets = state.wallets?.map(wallet =>
                wallet.address === action.payload.address
                    ? { ...wallet, ...action.payload }
                    : wallet,
            );
        },
        // add a group to a wallet
        addToGroup: (state, action) => {
            state.wallets = state.wallets?.map(wallet => {
                if (wallet.address === action.payload.address) {
                    const groupExists = wallet.group.includes(
                        action.payload.group,
                    );
                    if (!groupExists) {
                        return {
                            ...wallet,
                            group: [action.payload.group, ...wallet.group],
                        };
                    }
                }
                return wallet;
            });
        },
        // remove a group from a wallet
        removeFromGroup: (state, action) => {
            state.wallets = state.wallets.map(wallet =>
                wallet.address === action.payload.address
                    ? {
                          ...wallet,
                          group: wallet.group.filter(
                              group => group !== action.payload.group,
                          ),
                      }
                    : wallet,
            );
        },
        // set label for a wallet
        setLabel: (state, action) => {
            state.wallets = state.wallets?.map(wallet =>
                wallet.address === action.payload.address
                    ? { ...wallet, label: action.payload.label }
                    : wallet,
            );
        },
    },
});

export default walletSlice.reducer;
export const {
    removeAllWallets,
    addWallet,
    removeWallet,
    updateWallet,
    addToGroup,
    setLabel,
    removeFromGroup,
} = walletSlice.actions;
