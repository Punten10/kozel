import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { useAppSelector } from "@/app/store/hooks";
import {
    IAddress,
    IGroup,
    IWallet,
    WalletType,
} from "@/pages/sub/Wallets/interfaces.tsx";
import { Input } from "@/components/ui/input.tsx";
import { TypographyMuted } from "@/components/ui/typography.tsx";
import { WalletItem } from "@/pages/sub/Settings/ui/WalletItems.tsx";
import { shortenWalletAddress } from "@/lib/wallets.ts";

const walletsType: WalletType[] = [
    "ton",
    "cosmos",
    "evm",
    "trx",
    "sol",
    "starknet",
];

const WalletsManagement: React.FC = () => {
    const wallets = useAppSelector(state => state.wallet.wallets);
    const groups = useAppSelector(state => state.wallet.groups);

    const [groupFilterOpen, setGroupFilterOpen] = React.useState(false);
    const [groupFilter, setGroupFilter] = React.useState("");
    const [selectedWallets, setSelectedWallets] = React.useState<IAddress[]>(
        [],
    );
    const [allSelected, setAllSelected] = React.useState(false);

    const [walletTypeFilterOpen, setWalletTypeOpen] = React.useState(false);
    const [walletType, setWalletType] = React.useState("");

    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSelectAll = () => {
        if (allSelected) {
            setSelectedWallets([]);
        } else {
            setSelectedWallets(
                wallets.map((wallet: IWallet) => wallet.address),
            );
        }
        setAllSelected(!allSelected);
    };

    const handleSelectWallet = (address: IAddress) => {
        setSelectedWallets(prevSelected =>
            prevSelected.includes(address)
                ? prevSelected.filter(
                      walletAddress => walletAddress !== address,
                  )
                : [...prevSelected, address],
        );
    };

    const filteredWallets = React.useMemo(() => {
        return wallets.filter((wallet: IWallet) => {
            const searchString = searchQuery.toLowerCase();
            const matchesSearch =
                wallet.address.toLowerCase().includes(searchString) ||
                (wallet.label &&
                    wallet.label.toLowerCase().includes(searchString)) ||
                (wallet.ens && wallet.ens.toLowerCase().includes(searchString));
            const matchesGroup =
                !groupFilter || wallet.group.includes(groupFilter);
            const matchesType = !walletType || wallet.type === walletType;
            return matchesSearch && matchesGroup && matchesType;
        });
    }, [wallets, searchQuery, groupFilter, walletType]);

    return (
        <Card className="col-span-2 col-start-2 row-span-2 row-start-1">
            <CardHeader>
                <div className="flex gap-8">
                    <div>
                        <CardTitle>Your Wallets</CardTitle>
                        <CardDescription>
                            Here you can manage your wallets.
                        </CardDescription>
                    </div>
                    <div className="flex gap-4">
                        <Popover
                            open={groupFilterOpen}
                            onOpenChange={setGroupFilterOpen}
                        >
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={groupFilterOpen}
                                    className="w-[200px] justify-between"
                                >
                                    {groupFilter
                                        ? groups.find(
                                              (group: IGroup) =>
                                                  group.value === groupFilter,
                                          )?.label
                                        : "Filter by group..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-[200px] p-0"
                                align="start"
                            >
                                <Command>
                                    <CommandInput placeholder="Filter groups..." />
                                    <CommandList>
                                        <CommandEmpty>
                                            No group found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {groups.map((group: IGroup) => (
                                                <CommandItem
                                                    key={group.value}
                                                    value={group.value}
                                                    onSelect={currentValue => {
                                                        setGroupFilter(
                                                            currentValue ===
                                                                groupFilter
                                                                ? ""
                                                                : currentValue,
                                                        );
                                                        setGroupFilterOpen(
                                                            false,
                                                        );
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            groupFilter ===
                                                                group.value
                                                                ? "opacity-100"
                                                                : "opacity-0",
                                                        )}
                                                    />
                                                    {group.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <Separator orientation="vertical" />
                        <Popover
                            open={walletTypeFilterOpen}
                            onOpenChange={setWalletTypeOpen}
                        >
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={walletTypeFilterOpen}
                                    className="w-[200px] justify-between"
                                >
                                    {walletType ? (
                                        <span className={"capitalize"}>
                                            {walletsType.find(
                                                type => type === walletType,
                                            )}
                                        </span>
                                    ) : (
                                        "Filter by type..."
                                    )}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-[200px] p-0"
                                align="start"
                            >
                                <Command>
                                    <CommandInput placeholder="Filter by type..." />
                                    <CommandList>
                                        <CommandEmpty>
                                            No wallet type found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {walletsType.map(type => (
                                                <CommandItem
                                                    key={type}
                                                    value={type}
                                                    onSelect={currentValue => {
                                                        setWalletType(
                                                            currentValue ===
                                                                walletType
                                                                ? ""
                                                                : currentValue,
                                                        );
                                                        setWalletTypeOpen(
                                                            false,
                                                        );
                                                    }}
                                                    className={"capitalize"}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            walletType === type
                                                                ? "opacity-100"
                                                                : "opacity-0",
                                                        )}
                                                    />
                                                    {type}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="grid gap-2">
                <div className="relative flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search wallets by Address / Label / ENS"
                        className="w-full rounded-lg bg-background pl-8 dark:text-muted-foreground md:w-[200px] lg:w-[336px]"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Checkbox
                        checked={allSelected}
                        onClick={handleSelectAll}
                        className="ml-4 mr-2"
                    />
                    <div className="flex gap-12">
                        <TypographyMuted className={"w-32"}>
                            Name / Address
                        </TypographyMuted>
                        <TypographyMuted className={"w-32"}>
                            Status
                        </TypographyMuted>
                        <TypographyMuted>Groups</TypographyMuted>
                    </div>
                </div>
                <div className="grid-auto-rows grid gap-2">
                    {filteredWallets.map((wallet: IWallet) => (
                        <WalletItem
                            key={wallet.address}
                            wallet={wallet}
                            shortAddress={shortenWalletAddress(wallet.address)}
                            isSelected={selectedWallets.includes(
                                wallet.address,
                            )}
                            onSelect={() => handleSelectWallet(wallet.address)}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default WalletsManagement;
