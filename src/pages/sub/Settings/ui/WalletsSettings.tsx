import React from "react";
import { WalletsGeneration } from "@/pages/sub/Settings/ui/WalletsGeneration.tsx";
import { WalletsImport } from "@/pages/sub/Settings/ui/WalletsImport.tsx";

const WalletsSetting: React.FC = () => {
    return (
        <>
            <WalletsGeneration />
            <WalletsImport />
        </>
    );
};

export default WalletsSetting;
