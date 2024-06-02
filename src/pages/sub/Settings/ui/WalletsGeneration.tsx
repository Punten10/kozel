import React, { useRef, useState } from "react";
import { CircleHelp, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
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
import { Input } from "@/components/ui/input.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command.tsx";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover.tsx";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card.tsx";
import {
    IGroup,
    WalletGroup,
    WalletsProps,
} from "@/pages/sub/Wallets/interfaces.tsx";
import { useAppSelector } from "@/app/store/hooks";
import { Checkbox } from "@/components/ui/checkbox.tsx";

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
    { name: "Excel File", value: "excel" },
    { name: "PDF File", value: "pdf" },
    { name: "JSON File", value: "json" },
];

export const WalletsGeneration: React.FC<WalletsProps> = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [walletGroup, setWalletGroup] = useState<WalletGroup[]>([]);
    const [_walletType, setWalletType] = useState<string>("");
    const [numWallets, setNumWallets] = useState<number | string>("");
    const [_exportType, setExportType] = useState<string>("");

    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
        setWalletGroup([]);
        setWalletType("");
        setNumWallets("");
        setExportType("");
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Your code for form submission
        console.log("Form submitted");
        // Reset form and state variables
        handleReset();
    };

    return (
        <Card className="col-start-1  min-w-[350px]">
            <CardHeader>
                <CardTitle>Create Wallets</CardTitle>
                <CardDescription>
                    Generate a new wallet for your project.
                </CardDescription>
            </CardHeader>
            <form ref={formRef} onSubmit={handleSubmit}>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="type">Wallet Type</Label>
                            <Select onValueChange={setWalletType}>
                                <SelectTrigger id="type">
                                    <SelectValue placeholder="Select type" />
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

                            <Label htmlFor="many">How many wallets?</Label>
                            <Input
                                type="number"
                                id="many"
                                placeholder="Enter number of wallets"
                                className="w-full rounded-lg border p-2"
                                min={0}
                                value={numWallets}
                                onChange={e => setNumWallets(e.target.value)}
                            />

                            <Label htmlFor="exportType">Save as</Label>
                            <Select onValueChange={setExportType}>
                                <SelectTrigger id="exportType">
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
                            <Label htmlFor="group">
                                <p className={"flex items-center gap-2"}>
                                    Add to Wallet Group?
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <CircleHelp
                                                className={
                                                    "h-4 w-4 opacity-80 hover:opacity-100"
                                                }
                                            />
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            You can add wallets to a group to
                                            organize them. And easily manage
                                            them. Create a new group in
                                            settings.
                                        </HoverCardContent>
                                    </HoverCard>
                                </p>
                            </Label>
                            <GroupManager
                                walletGroup={walletGroup}
                                setWalletGroup={setWalletGroup}
                            />

                            <div className="flex items-center space-x-2 pt-2">
                                <Checkbox id="addToWork" checked={true} />
                                <label
                                    htmlFor="terms"
                                    className="flex gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Add wallet to WorkList?
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <CircleHelp
                                                className={
                                                    "h-4 w-4 opacity-80 hover:opacity-100"
                                                }
                                            />
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            If you enable this option, the
                                            wallet will be added to the
                                            worklight ("Your Wallets"). If not
                                            wallets just will be generated and
                                            exported.
                                        </HoverCardContent>
                                    </HoverCard>
                                </label>
                            </div>
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
                    <Button className="flex gap-2" type="submit">
                        Run
                        <Play className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

type GroupManagerProps = {
    walletGroup: WalletGroup[];
    setWalletGroup: (groups: WalletGroup[]) => void;
};

export function GroupManager({
    walletGroup,
    setWalletGroup,
}: GroupManagerProps) {
    const [open, setOpen] = React.useState(false);
    const [selectedStatus, setSelectedStatus] = React.useState<IGroup | null>(
        null,
    );
    const groups = useAppSelector(state => state.wallet.groups);

    const handleSelectStatus = (value: string) => {
        const status =
            groups.find((group: IGroup) => group.value === value) || null;
        if (status && !walletGroup.includes(status.label)) {
            setWalletGroup([...walletGroup, status.label]);
        }
        setSelectedStatus(null); // Сбрасываем выбранный статус после добавления
        setOpen(false);
    };

    const handleDeleteGroup = (group: string) => {
        setWalletGroup(walletGroup.filter(item => item !== group));
    };

    return (
        <>
            <div className="mb-2 flex flex-wrap items-center gap-2">
                {walletGroup.map((group, index) => (
                    <Badge key={index} className="flex items-center">
                        {group}
                        <X
                            className="ml-1 h-4 w-4 cursor-pointer"
                            onClick={() => handleDeleteGroup(group)}
                        />
                    </Badge>
                ))}
            </div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                        {selectedStatus ? (
                            <>{selectedStatus.label}</>
                        ) : (
                            <>+ Add Groups</>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" align="start">
                    <Command>
                        <CommandInput placeholder="Filter groups..." />
                        <CommandList>
                            <CommandEmpty>No group found.</CommandEmpty>
                            <CommandGroup>
                                {groups.map((group: IGroup) => (
                                    <CommandItem
                                        key={group.value}
                                        value={group.value}
                                        onSelect={handleSelectStatus}
                                    >
                                        {group.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    );
}
