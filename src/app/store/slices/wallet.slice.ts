import { createSlice } from "@reduxjs/toolkit";

type WalletType = "ton" | "evm" | "cosmos" | "starknet" | "trx" | "sol";

interface IWallet {
    isConnected: boolean;
    address: string | null;
    balance: string | null;
    isDisabled: boolean;
    type: WalletType;
    phrase: string | null;
    label: string | null;
    ens: string | null;
    group: string[];
}

interface IWallets {
    wallets?: IWallet[];
}

const initialState: IWallets = {};

const mediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {
        // remove all the wallets
        removeAllWallets: state => {
            state.wallets = [];
        },
        // add a wallet
        addWallet: (state, action) => {
            state.wallets?.push(action.payload);
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
            state.wallets = state.wallets?.map(wallet =>
                wallet.address === action.payload.address
                    ? {
                          ...wallet,
                          group: [...wallet.group, action.payload.group],
                      }
                    : wallet,
            );
        },
        // remove a group from a wallet
        setLabel: (state, action) => {
            state.wallets = state.wallets?.map(wallet =>
                wallet.address === action.payload.address
                    ? { ...wallet, label: action.payload.label }
                    : wallet,
            );
        },
    },
});

export default mediaSlice.reducer;
export const {} = mediaSlice.actions;
