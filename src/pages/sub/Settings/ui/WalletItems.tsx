// WalletItems.tsx
import React from "react";
import { KeyRound, MoreHorizontal, Tag, Trash, Users } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { IWallet } from "@/pages/sub/Wallets/interfaces.tsx";
import { CopyDiv } from "@/shared/CopyDiv.tsx";
import { getGroupLabel } from "@/lib/wallets.ts";

import { Label, TypographySmall } from "@/components/ui/typography";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card.tsx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area.tsx";
import { Badge } from "@/components/ui/badge.tsx";
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
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command.tsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog.tsx";
import {
    addToGroup,
    removeFromGroup,
    setLabel,
} from "@/app/store/slices/wallet.slice.ts";

interface IWalletItemProps {
    wallet: IWallet;
    shortAddress: string;
    isSelected: boolean;
    onSelect: () => void;
}

export const WalletItem: React.FC<IWalletItemProps> = ({
    wallet,
    shortAddress,
    isSelected,
    onSelect,
}) => {
    const [open, setOpen] = React.useState(false);
    const [alertDialogOpen, setAlertDialogOpen] = React.useState(false);
    const [editLabelOpen, setEditLabelOpen] = React.useState(false);
    const [newLabel, setNewLabel] = React.useState(wallet.label);
    const groups = useAppSelector(state => state.wallet.groups);
    const dispatch = useAppDispatch();

    const handleLabelChange = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setLabel({ address: wallet.address, label: newLabel }));
        setEditLabelOpen(false);
    };

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md border border-zinc-800 px-4 py-3 sm:flex-row sm:items-center">
            <div className="flex items-center">
                <Checkbox
                    checked={isSelected}
                    onClick={e => {
                        e.preventDefault();
                        onSelect();
                    }}
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
                        <DropdownMenuItem
                            onSelect={() => setEditLabelOpen(true)}
                        >
                            <Tag className="mr-2 h-4 w-4" />
                            Set Label...
                        </DropdownMenuItem>
                        {wallet?.phrase && (
                            <DropdownMenuItem
                                onSelect={() => setAlertDialogOpen(true)}
                            >
                                <KeyRound className="mr-2 h-4 w-4" />
                                See Phrase
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <Users className="mr-2 h-4 w-4" />
                                Add to Group
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="p-0">
                                <Command>
                                    <CommandInput
                                        placeholder="Filter groups..."
                                        autoFocus={true}
                                    />
                                    <CommandList>
                                        <CommandEmpty>
                                            No group found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {groups.map((group: any) => (
                                                <CommandItem
                                                    key={group.value}
                                                    value={group.value}
                                                    onSelect={() => {
                                                        dispatch(
                                                            addToGroup({
                                                                address:
                                                                    wallet.address,
                                                                group: group.value,
                                                            }),
                                                        );
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {group.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        {wallet.group.length > 0 && (
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Users className="mr-2 h-4 w-4" />
                                    Remove from Group
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="p-0">
                                    <Command>
                                        <CommandInput
                                            placeholder="Filter groups..."
                                            autoFocus={true}
                                        />
                                        <CommandList>
                                            <CommandEmpty>
                                                No group found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {wallet.group.map(group => (
                                                    <CommandItem
                                                        key={group}
                                                        value={group}
                                                        onSelect={() => {
                                                            dispatch(
                                                                removeFromGroup(
                                                                    {
                                                                        address:
                                                                            wallet.address,
                                                                        group,
                                                                    },
                                                                ),
                                                            );
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        {getGroupLabel(
                                                            group,
                                                            groups,
                                                        )}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="text-red-600"
                            onSelect={() => setAlertDialogOpen(true)}
                        >
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Edit Label Dialog */}
            <Dialog open={editLabelOpen} onOpenChange={setEditLabelOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Label</DialogTitle>
                        <DialogDescription>
                            Change the label for your wallet. Click save when
                            you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleLabelChange}>
                        <div className="grid gap-2">
                            <Label htmlFor="label">Label</Label>
                            <Input
                                id="label"
                                value={`${newLabel}`}
                                onChange={e => setNewLabel(e.target.value)}
                                placeholder="Enter new label"
                                className={"text-foreground"}
                            />
                        </div>
                        <Button type="submit" className="mt-4">
                            Save changes
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Secret Phrase AlertDialog */}
            <AlertDialog
                open={alertDialogOpen}
                onOpenChange={setAlertDialogOpen}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={"text-foreground"}>
                            Are you absolutely sure you want to see the Secret
                            Phrase?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className={"text-foreground"}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => console.log("Show Phrase")}
                        >
                            Show Phrase
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};
