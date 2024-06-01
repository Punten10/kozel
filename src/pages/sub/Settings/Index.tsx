import React from "react";
import { WalletsGeneration } from "@/pages/sub/Settings/ui/WalletsGeneration.tsx";
import { WalletsImport } from "@/pages/sub/Settings/ui/WalletsImport.tsx";
import { useAppSelector } from "@/app/store/hooks";

const SettingsPage: React.FC = () => {
    const nav = useAppSelector(state => state.navigation.nav);

    return (
        <>
            {nav === "settings:wallets" ? (
                <>
                    <WalletsGeneration />
                    <WalletsImport />
                </>
            ) : null}
        </>
    );
};

export default SettingsPage;
