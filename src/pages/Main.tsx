import {
    Activity,
    ArrowLeftRight,
    Bell,
    Home,
    LifeBuoy,
    LineChart,
    Link,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    User,
    Users2,
    Wallet,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { Navigation } from "@/entities/Navigation/Index.tsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { WalletsPage } from "@/pages/sub/Wallets/Index.tsx";
import { Dashboard } from "@/pages/sub/Dashboard.tsx";
import { Analytics } from "@/pages/sub/Analytics.tsx";
import Contributors from "@/pages/sub/Contributors/Index.tsx";
import { shell } from "@tauri-apps/api";
import SettingsPage from "@/pages/sub/Settings/Index.tsx";
import { setNav } from "@/app/store/slices/navigation.slice.ts";

export const Main = () => {
    const nav = useAppSelector(state => state.navigation.nav);
    const dispatch = useAppDispatch();

    const switchNav = (nav: string) => {
        dispatch(setNav(nav));
    };
    return (
        <TooltipProvider>
            <div className="flex bg-zinc-950 dark:bg-background">
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <Navigation />

                    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">
                                            Kozel
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage
                                            className={"capitalize"}
                                        >
                                            {nav}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="sm:hidden"
                                    >
                                        <PanelLeft className="h-5 w-5" />
                                        <span className="sr-only">
                                            Toggle Menu
                                        </span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="left"
                                    className="sm:max-w-xs"
                                >
                                    <nav className="grid gap-6 text-lg font-medium">
                                        <Link
                                            href="#"
                                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                        >
                                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                            <span className="sr-only">
                                                Acme Inc
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Home className="h-5 w-5" />
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-foreground"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                            Orders
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Package className="h-5 w-5" />
                                            Products
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Users2 className="h-5 w-5" />
                                            Customers
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <LineChart className="h-5 w-5" />
                                            Settings
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>

                            <div className="relative ml-auto flex-1 md:grow-0">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-full rounded-lg bg-background pl-8 dark:text-muted-foreground md:w-[200px] lg:w-[336px]"
                                />
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="overflow-hidden rounded-full"
                                    >
                                        <Activity
                                            className={"h-6 w-6 dark:invert"}
                                        />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="center">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="overflow-hidden rounded-full"
                                    >
                                        <Bell
                                            className={"h-6 w-6 dark:invert"}
                                        />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="center">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="overflow-hidden rounded-full"
                                    >
                                        <User
                                            className={"h-6 w-6 dark:invert"}
                                        />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        My Account
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        switchNav(
                                                            "settings:exchanges",
                                                        )
                                                    }
                                                >
                                                    <ArrowLeftRight className="mr-2 h-4 w-4" />
                                                    <span>Exchanges</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() =>
                                                        switchNav(
                                                            "settings:wallets",
                                                        )
                                                    }
                                                >
                                                    <Wallet className="mr-2 h-4 w-4" />
                                                    <span>Wallets</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            shell
                                                .open(
                                                    "https://t.me/hidden_coding",
                                                )
                                                .then();
                                        }}
                                    >
                                        <LifeBuoy className="mr-2 h-4 w-4" />
                                        <span>Support</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </header>
                        <main className="grid-container grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-4 lg:grid-cols-3 xl:grid-cols-3">
                            {nav === "dashboard" ? (
                                <Dashboard />
                            ) : nav === "wallets" ? (
                                <WalletsPage />
                            ) : nav === "analytics" ? (
                                <Analytics />
                            ) : nav === "contributors" ? (
                                <Contributors />
                            ) : nav.startsWith("settings") ? (
                                <SettingsPage />
                            ) : null}
                        </main>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
};
