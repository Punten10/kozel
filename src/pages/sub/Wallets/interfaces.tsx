export interface WalletsProps {}

export type WalletType = "ton" | "evm" | "cosmos" | "starknet" | "trx" | "sol";
export type WalletGroup = string;

export type IAddress = string;

export interface IWallet {
    isConnected: boolean;
    address: IAddress;
    balance: string | null;
    isDisabled: boolean;
    type: WalletType;
    phrase: string | null;
    label: string | null;
    ens: string | null;
    group: WalletGroup[];
}

export interface IGroup {
    value: WalletGroup;
    label: string;
}
