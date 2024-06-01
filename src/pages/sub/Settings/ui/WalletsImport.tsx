import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import React, { useRef } from "react";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/typography.tsx";

export const WalletsImport: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Ваш код для отправки данных
        console.log("Form submitted");
        // Reset form and state variables
        handleReset();
    };
    const handleReset = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <Card className="col-start-1 min-w-[350px]">
            <CardHeader>
                <CardTitle>Import Wallets</CardTitle>
                <CardDescription>Import wallets from a file.</CardDescription>
            </CardHeader>
            <form ref={formRef} onSubmit={handleSubmit}>
                <CardContent>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Your file</Label>
                        <Input id="picture" type="file" />
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
