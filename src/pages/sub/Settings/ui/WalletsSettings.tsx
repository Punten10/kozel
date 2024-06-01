import React from "react";
import { WalletsGeneration } from "@/pages/sub/Settings/ui/WalletsGeneration";
import { WalletsImport } from "@/pages/sub/Settings/ui/WalletsImport";
import WalletsManagement from "@/pages/sub/Settings/ui/WalletsManagement";

const WalletsSetting: React.FC = () => {
    return (
        <>
            <WalletsGeneration />
            <WalletsImport />
            <WalletsManagement />
        </>
    );
};

export default WalletsSetting;
