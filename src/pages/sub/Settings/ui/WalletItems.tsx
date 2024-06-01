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
    label: string;
    onLabelChange: (label: string) => void;
    isSelected: boolean;
    onSelect: () => void;
}

export const WalletItem: React.FC<IWalletItemProps> = ({
    label,
    onLabelChange,
    isSelected,
    onSelect,
}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md border border-zinc-800 px-4 py-3 sm:flex-row sm:items-center">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={onSelect}
                    className="mr-2"
                />
                <p className="text-sm font-medium leading-none">
                    <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                        {label}
                    </span>
                    <span className="text-muted-foreground">
                        Create a new project
                    </span>
                </p>
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
