import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { LinkButton } from "@/shared/LinkButton.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setNav } from "@/app/store/slices/navigation.slice.ts";
import { GoatLogo } from "@/shared/images/GoatLogo.tsx";
import { useTheme } from "@/components/theme-provider.tsx";
import {
    Home,
    LineChart,
    Moon,
    PartyPopper,
    Settings,
    Sun,
    Wallet,
} from "lucide-react";

export const Navigation = () => {
    const { setTheme } = useTheme();
    const dispatch = useAppDispatch();
    const nav = useAppSelector(state => state.navigation.nav);

    const switchNav = (nav: string) => {
        dispatch(setNav(nav));
    };

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <div
                    className={
                        "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    }
                >
                    <GoatLogo
                        className={
                            "h-6 w-6 transition-all group-hover:scale-110"
                        }
                    />
                </div>
                <Tooltip>
                    <TooltipTrigger>
                        <LinkButton
                            onClick={() => switchNav("dashboard")}
                            className={`flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${nav === "dashboard" ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : ""}`}
                        >
                            <Home className="h-5 w-5 " />
                            <span className="sr-only">Dashboard</span>
                        </LinkButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <LinkButton
                            onClick={() => switchNav("wallets")}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${nav === "wallets" ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : ""}`}
                        >
                            <Wallet className="h-5 w-5 " />
                            <span className="sr-only">Wallets</span>
                        </LinkButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">Wallets</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger>
                        <LinkButton
                            onClick={() => switchNav("analytics")}
                            className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${nav === "analytics" ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : ""}`}
                        >
                            <LineChart className="h-5 w-5 " />
                            <span className="sr-only">Analytics</span>
                        </LinkButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">Analytics</TooltipContent>
                </Tooltip>
            </nav>

            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5 ">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="link"
                            size="icon"
                            className={
                                "text-muted-foreground transition-colors hover:text-foreground"
                            }
                        >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <LinkButton
                            onClick={() => switchNav("contributors")}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <PartyPopper className="h-5 w-5 " />
                            <span className="sr-only">Contributors</span>
                        </LinkButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">Contributors</TooltipContent>
                </Tooltip>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="link"
                            size="icon"
                            className="overflow-hidden rounded-full"
                        >
                            <Settings className="h-5 w-5 opacity-65 transition-opacity duration-300 hover:opacity-100" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Settings</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => switchNav("settings:exchanges")}
                        >
                            Exchanges
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => switchNav("settings:wallets")}
                        >
                            Wallets
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </aside>
    );
};
