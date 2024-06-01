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
        avatar: "https://cdn4.cdn-telegram.org/file/PWBytJnkdGiG-h5iZzsWplchyHYqKCOyusJzeTGN8DvGee9WKB5NOy29RsHxAch9MkroIsQJIFnFUS6e5u9CJ4EWjlAER2uc8ME2y-yN2xMaCcgijTUYuOJWhg4WDcl5cWgcoy24qfXraMGoXnGX1ZGGa9w68hRmxLr5-NWz02NtzcT7liQ2UjZ0PObpNDkN_RoWwBk9MhzUhjy1fGROFraB9FRMt26-NDsqbe0LxAi5Q5iKx8Dtfgm6OMO0tTDiGpQVUstcPCGg6dTzLn7XzScHwPAMSzRo5DOCtH3DBR3PR3ijbDMxSwX36aW9-m-tHwJufeXqxyA_ul4rf9nZ9A.jpg",
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
        avatar: "https://cdn4.cdn-telegram.org/file/bItzKcwV_bkCwuapIugcJCbb2IW8NiMEG8X6pl30WswqWhwjDFgnbPwajzhqsC0J5_mrnGOVRf8LdvfgUXGlfGUP5xjgM0SITTRq35QN5l2s2N0Ux8TE9I084oRROpnvYfSjvhxiJfWgKwxf1_L1kBUk_NB63_9DYGGkyyQh5Z6pNzKpPz3MhNPyGtrn1RIZ5Au83YhiYDZaaJ85UhmJVsWyGPyMMf1bUaXEladTTCm0yUJv37dxDzM3Z9xB9HtUOgIE4YjTwtXpAsMKn9SLqeOD_0bGydiffMt-C_1tA7AKr_DdxM99wo2el_qNm2z4oyhE7XwP042dugIwhz07IA.jpg",
        tg: "https://t.me/darkness_vlad",
        j_date: "May 2024",
        desc: "Brainstorming and ideas for the project",
    },
    {
        name: "kakadugenius",
        role: "Designer",
        avatar: "https://cdn4.cdn-telegram.org/file/sbt-EI2zzUHuYDp4pHZcjdKDI3OLqrrCoruD9Dh8GHacRk3n-bArZT1focPTGAHzqqXQ1TjeRr0mMak7NgOYhRI1q33V6p6LsmzpSNaQZZRidzaCqG83M5O05V89NDnIvGaijMhWItZEU3Ij0loG45ud0fGxVpdMGfmtUX2uO5ON7LlwoidWglIxBRco8jMBlKBirllj6HmXvRenJfNB4-0UNP4c59oDCxOwBLpoiv8Ddno44bBmKxnCa4O4UfeRpxTC97vBLgXG4zxL3geRhUDqPmxO5Grj4j8TXc5leHb3wxLjTM7HpztkShYkBTljg70Dl3nyoWHCeokGST-MdQ.jpg",
        tg: "https://t.me/kakadugenius",
        j_date: "June 2024",
        link: "https://t.me/nullCryptan",
        desc: "Designer icons for logo and website",
    },
];
