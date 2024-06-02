import { IAddress, IGroup } from "@/pages/sub/Wallets/interfaces.tsx";

export const shortenWalletAddress = (address: IAddress): string => {
    const start = address.slice(0, 6);
    const end = address.slice(-5);

    return `${start}...${end}`;
};

export const getGroupLabel = (value: string, groups: IGroup[]) => {
    const group = groups.find(g => g.value === value);
    return group ? group.label : value; // Return the label if found, otherwise return the value
};
