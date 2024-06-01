import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { ListChecks } from "lucide-react";
import { TypographyP } from "@/components/ui/typography.tsx";

export const Dashboard = () => {
    return (
        <>
            <Card className={"col-span-2 col-end-6 row-start-1 row-end-3"}>
                <CardHeader>
                    <CardTitle>Processes</CardTitle>
                    <CardDescription>
                        Here is a list of all processes
                    </CardDescription>
                </CardHeader>
                <CardContent className={"grid h-full min-h-64"}>
                    <div
                        className={"mx-auto my-auto grid h-min justify-center"}
                    >
                        <ListChecks
                            className={"mx-auto h-20 w-20 opacity-70"}
                        />
                        <TypographyP className={"mx-auto w-10/12 text-center"}>
                            You don't have any scheduled processes
                        </TypographyP>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};
