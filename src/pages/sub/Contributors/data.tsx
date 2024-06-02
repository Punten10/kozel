type ContributorRole =
    | "Developer"
    | "Designer"
    | "Contributor"
    | "Tester"
    | "Translator"
    | "Support"
    | "Moderator"
    | "Community Manager"
    | "Dreamer"
    | "Other";

interface IContributor {
    name: string;
    role: ContributorRole;
    avatar: string;
    tg?: string;
    tw?: string;
    yt?: string;
    link?: string;
    j_date: string;
    github?: string;
    desc: string;
}

export const contributors: IContributor[] = [
    {
        name: "Aero25x",
        role: "Developer",
        avatar: "aero25x.jpg",
        tg: "https://t.me/Aero25x",
        yt: "https://www.youtube.com/@flaming_chameleon",
        j_date: "May 2024",
        link: "https://t.me/hidden_coding",
        desc: "Founder and Developer of the project",
        github: "https://github.com/flaming-chameleon",
    },
    {
        name: "darkness_vlad",
        role: "Dreamer",
        avatar: "darkness_vlad.jpg",
        tg: "https://t.me/darkness_vlad",
        j_date: "May 2024",
        desc: "Brainstorming and ideas for the project",
    },
    {
        name: "kakadugenius",
        role: "Designer",
        avatar: "kakadugenius.jpg",
        tg: "https://t.me/kakadugenius",
        j_date: "June 2024",
        link: "https://t.me/nullCryptan",
        desc: "Designer icons for logo and website",
    },
];
