import React from "react";
import { TypographyH1, TypographyP } from "@/components/ui/typography.tsx";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar.tsx";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card.tsx";
import {
    BookHeart,
    BugPlay,
    Captions,
    CodeXml,
    ContactRound,
    HeartHandshake,
    Lightbulb,
    Palette,
    Shield,
} from "lucide-react";
import WebsiteIcon from "@/shared/images/Website.tsx";
import Twitter from "@/shared/images/Twitter.tsx";
import Telegram from "@/shared/images/Telegram.tsx";
import Youtube from "@/shared/images/Youtube.tsx";
import { motion } from "framer-motion";
import { frContainer, frItem } from "@/shared/animation/variants.tsx";
import { contributors } from "@/pages/sub/Contributors/data.tsx";
import Github from "@/shared/images/Github.tsx";

const Contributors: React.FC = () => {
    return (
        <div className={"col-span-3 grid gap-10 pt-12"}>
            <div>
                <TypographyH1 className={"text-center"}>
                    Walk of Fame
                </TypographyH1>
                <TypographyP className={"text-center"}>
                    Thanks to everyone who had a hand in the development of this
                    project
                </TypographyP>
            </div>

            <motion.div
                className={"flex flex-wrap justify-center gap-8"}
                variants={frContainer}
                initial="hidden"
                animate="visible"
            >
                {contributors.map((contributor, index) => {
                    return (
                        <motion.div key={index} variants={frItem}>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Avatar
                                        className={
                                            "h-20 w-20 transition-all duration-300 hover:-rotate-12"
                                        }
                                    >
                                        <AvatarImage
                                            className={"h-20 w-20"}
                                            src={`/contributors/${contributor.avatar}`}
                                            alt={`@${contributor.name.toLowerCase()}`}
                                        />
                                        <AvatarFallback>
                                            {contributor.name}
                                        </AvatarFallback>
                                    </Avatar>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-min-48 w-80">
                                    <div className="flex justify-between space-x-4">
                                        <div className={"grid justify-center"}>
                                            <Avatar className={"mx-auto"}>
                                                <AvatarImage
                                                    src={`/contributors/${contributor.avatar}`}
                                                    alt={`@${contributor.name.toLowerCase()}`}
                                                />
                                                <AvatarFallback>
                                                    {contributor.name}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div
                                                className={
                                                    "flex flex-wrap justify-center gap-2 pt-2"
                                                }
                                            >
                                                {contributor?.tg && (
                                                    <a
                                                        href={contributor.tg}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-muted-foreground"
                                                    >
                                                        <Telegram className="h-4 w-4 opacity-70 transition-all duration-300 hover:opacity-100" />
                                                    </a>
                                                )}
                                                {contributor?.tw && (
                                                    <a
                                                        href={contributor.tw}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-muted-foreground"
                                                    >
                                                        <Twitter className="h-4 w-4 opacity-70 transition-all duration-300 hover:opacity-100" />
                                                    </a>
                                                )}
                                                {contributor?.link && (
                                                    <a
                                                        href={contributor.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-muted-foreground"
                                                    >
                                                        <WebsiteIcon className="h-4 w-4 opacity-70 transition-all duration-300 hover:opacity-100" />
                                                    </a>
                                                )}
                                                {contributor?.yt && (
                                                    <a
                                                        href={contributor.yt}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-muted-foreground"
                                                    >
                                                        <Youtube className="h-4 w-4 opacity-70 transition-all duration-300 hover:opacity-100" />
                                                    </a>
                                                )}
                                                {contributor?.github && (
                                                    <a
                                                        href={
                                                            contributor.github
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-muted-foreground"
                                                    >
                                                        <Github className="h-4 w-4 opacity-70 transition-all duration-300 hover:opacity-100" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-semibold capitalize">
                                                {contributor.name}
                                            </h4>
                                            <p className="text-sm">
                                                {contributor.desc}
                                            </p>
                                            <div className="flex items-center pt-2">
                                                <HoverCard>
                                                    <HoverCardTrigger>
                                                        {contributor.role ===
                                                        "Developer" ? (
                                                            <CodeXml className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : contributor.role ===
                                                          "Designer" ? (
                                                            <Palette className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : contributor.role ===
                                                          "Contributor" ? (
                                                            <Palette className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : contributor.role ===
                                                          "Tester" ? (
                                                            <BugPlay className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : contributor.role ===
                                                          "Translator" ? (
                                                            <Captions className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : contributor.role ===
                                                          "Support" ? (
                                                            <HeartHandshake className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : contributor.role ===
                                                          "Moderator" ? (
                                                            <Shield className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : contributor.role ===
                                                          "Community Manager" ? (
                                                            <ContactRound className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : contributor.role ===
                                                          "Dreamer" ? (
                                                            <Lightbulb className="mr-2 h-4 w-4 opacity-70" />
                                                        ) : (
                                                            <BookHeart className="mr-2 h-4 w-4 opacity-70" />
                                                        )}
                                                    </HoverCardTrigger>
                                                    <HoverCardContent>
                                                        Role: {contributor.role}
                                                    </HoverCardContent>
                                                </HoverCard>
                                                <span className="text-xs text-muted-foreground">
                                                    Joined {contributor.j_date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Contributors;
