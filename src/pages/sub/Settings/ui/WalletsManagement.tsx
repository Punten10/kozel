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
import { Check, ChevronsUpDown } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";
import { WalletItem } from "@/pages/sub/Settings/ui/WalletItems.tsx";

const frameworks = [
    {
        value: "all",
        label: "All groups",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

const walletsData = [
    { id: 1, label: "feature" },
    { id: 2, label: "bug" },
    { id: 3, label: "enhancement" },
    { id: 4, label: "documentation" },
    { id: 5, label: "design" },
];

const WalletsManagement: React.FC = () => {
    const [groupFilterOpen, setGroupFilterOpen] = React.useState(false);
    const [groupFilter, setGroupFilter] = React.useState("");
    const [selectedWallets, setSelectedWallets] = React.useState<number[]>([]);
    const [allSelected, setAllSelected] = React.useState(false);

    const handleSelectAll = () => {
        if (allSelected) {
            setSelectedWallets([]);
        } else {
            setSelectedWallets(walletsData.map(wallet => wallet.id));
        }
        setAllSelected(!allSelected);
    };

    const handleSelectWallet = (id: number) => {
        setSelectedWallets(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(walletId => walletId !== id)
                : [...prevSelected, id],
        );
    };

    const handleLabelChange = (id: number, newLabel: string) => {
        // Update wallet label logic here if needed
        console.log(id, newLabel);
    };

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
                                        ? frameworks.find(
                                              framework =>
                                                  framework.value ===
                                                  groupFilter,
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
                                            {frameworks.map(framework => (
                                                <CommandItem
                                                    key={framework.value}
                                                    value={framework.value}
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
                                                                framework.value
                                                                ? "opacity-100"
                                                                : "opacity-0",
                                                        )}
                                                    />
                                                    {framework.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <Separator orientation="vertical" />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="grid gap-2">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={allSelected}
                        onChange={handleSelectAll}
                        className="mr-2"
                    />
                    <span>Select All</span>
                </div>
                {walletsData.map(wallet => (
                    <WalletItem
                        key={wallet.id}
                        label={wallet.label}
                        onLabelChange={(newLabel: string) =>
                            handleLabelChange(wallet.id, newLabel)
                        }
                        isSelected={selectedWallets.includes(wallet.id)}
                        onSelect={() => handleSelectWallet(wallet.id)}
                    />
                ))}
            </CardContent>
        </Card>
    );
};

export default WalletsManagement;
