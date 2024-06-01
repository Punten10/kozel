import React from "react";
import { useAppSelector } from "@/app/store/hooks";
import WalletsSetting from "@/pages/sub/Settings/ui/WalletsSettings.tsx";

const SettingsPage: React.FC = () => {
    const nav = useAppSelector(state => state.navigation.nav);

    return <>{nav === "settings:wallets" ? <WalletsSetting /> : null}</>;
};

export default SettingsPage;
