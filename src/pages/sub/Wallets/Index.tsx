import React, { useRef } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { Label } from "@/components/ui/typography.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Play } from "lucide-react";
import { Input } from "@/components/ui/input.tsx";

interface WalletsProps {}

const WalletsType = [
    { name: "EVM", value: "evm" },
    { name: "Ton", value: "ton" },
    { name: "Atom", value: "atom" },
    { name: "Starknet", value: "starknet" },
    { name: "Tron", value: "trx" },
    { name: "Solana", value: "sol" },
];

const ExportType = [
    { name: "Text File", value: "text" },
    { name: "Excel Fie", value: "excel" },
    { name: "PDF File", value: "pdf" },
    { name: "JSON File", value: "json" },
];

export const Index: React.FC<WalletsProps> = () => {
    return (
        <>
            <WalletsGeneration />
        </>
    );
};

const WalletsGeneration: React.FC<WalletsProps> = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create Wallets</CardTitle>
                <CardDescription>
                    Generate a new wallet for your project.
                </CardDescription>
            </CardHeader>
            <form ref={formRef}>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="type">Wallet Type</Label>
                            <Select>
                                <SelectTrigger id="type">
                                    <SelectValue placeholder="Select typ" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {WalletsType.map(item => (
                                        <SelectItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Label htmlFor={"many"}>How many wallets?</Label>
                            <Input
                                type="number"
                                id={"many"}
                                placeholder={"Enter number of wallets"}
                                className="w-full rounded-lg border p-2"
                                min={0}
                            />

                            <Label htmlFor="type">Save as</Label>
                            <Select>
                                <SelectTrigger id="type">
                                    <SelectValue placeholder="Select export way" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {ExportType.map(item => (
                                        <SelectItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        variant="outline"
                        type="button"
                        onClick={handleReset}
                    >
                        Reset
                    </Button>
                    <Button className={"flex gap-2"} type="submit">
                        Run
                        <Play className={"h-4 w-4"} />
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};
