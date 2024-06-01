export interface WalletsProps {}

export type WalletType = "ton" | "evm" | "cosmos" | "starknet" | "trx" | "sol";
export type WalletGroup = string;

export interface IWallet {
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
