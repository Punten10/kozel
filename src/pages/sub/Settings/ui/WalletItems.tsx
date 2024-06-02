import { Calendar, MoreHorizontal, Tags, Trash, User } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";
import { IWallet } from "@/pages/sub/Wallets/interfaces.tsx";
import { TypographySmall } from "@/components/ui/typography.tsx";
import { CopyDiv } from "@/shared/CopyDiv.tsx";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card.tsx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area.tsx";
import { useAppSelector } from "@/app/store/hooks";
import { getGroupLabel } from "@/lib/wallets.ts";
import { Badge } from "@/components/ui/badge.tsx";

const labels = [
    "feature",
    "bug",
    "enhancement",
    "documentation",
    "design",
    "question",
    "maintenance",
];

interface IWalletItemProps {
    wallet: IWallet;
    shortAddress: string;
    onLabelChange: (label: string) => void;
    isSelected: boolean;
    onSelect: () => void;
}

export const WalletItem: React.FC<IWalletItemProps> = ({
    wallet,
    shortAddress,
    onLabelChange,
    isSelected,
    onSelect,
}) => {
    const [open, setOpen] = React.useState(false);
    const groups = useAppSelector(state => state.wallet.groups);

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md border border-zinc-800 px-4 py-3 sm:flex-row sm:items-center">
            <div className="flex items-center">
                <Checkbox
                    checked={isSelected}
                    onClick={onSelect}
                    className="mr-6"
                />
                <div className="flex items-center justify-center gap-8">
                    <p className="w-32 cursor-pointer text-sm font-medium leading-none">
                        <CopyDiv value={wallet.address}>
                            {wallet.label ? (
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <TypographySmall>
                                            {wallet.label || wallet.ens}
                                        </TypographySmall>
                                    </HoverCardTrigger>
                                    <HoverCardContent
                                        className={
                                            "w-full min-w-48 text-center"
                                        }
                                    >
                                        {shortAddress}
                                    </HoverCardContent>
                                </HoverCard>
                            ) : (
                                <TypographySmall>
                                    {shortAddress}
                                </TypographySmall>
                            )}
                        </CopyDiv>
                    </p>
                    <div>
                        <TypographySmall className={"min-w-32"}>
                            {wallet.phrase
                                ? wallet.isDisabled
                                    ? "Disabled"
                                    : "Ready"
                                : "Only Deposit"}
                        </TypographySmall>
                    </div>
                    <ScrollArea className="w-64 whitespace-nowrap ">
                        <div className="flex w-max justify-center space-x-4 p-4">
                            {wallet.group.map(group => (
                                <Badge variant={"secondary"} key={group}>
                                    {getGroupLabel(group, groups)}
                                </Badge>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            Assign to...
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            Set due date...
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Tags className="mr-2 h-4 w-4" />
                                Add to Group
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Filter label..."
                                        autoFocus={true}
                                    />
                                    <CommandList>
                                        <CommandEmpty>
                                            No label found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {labels.map(item => (
                                                <CommandItem
                                                    key={item}
                                                    value={item}
                                                    onSelect={() => {
                                                        onLabelChange(item);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {item}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
