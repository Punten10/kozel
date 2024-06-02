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
        avatar: "https://cdn4.cdn-telegram.org/file/gMsMYRZh3YurQXnTUdp_Ak9VMLANhJ38r5AazSasedFOJJSHcqPZRL7uRfsaQJwLxLM22Ijd4SjEf1wMN2IdzG3Sc_zzVxMfdVCnFNhBgWczgp7Hmak2YfWbs4c-moW1qJBYwD0YTjZEaWJkP_EnLY0YvmBCkkEN4QXAnxaDvrkgK596Y_nb1Gt2Lx4OUmm3JcTIgiZmcsl_H0BmsUiSI3YiXQOe5Wg6RnpqCV1rVSMMGNeFxmw_4oVMwYwmFp_kHqSAPTSKgjVgtCAskIH64-YVRN1PjVq52xq083DOTUFplmUzN2QekEASLGwVsLin7z5hz4X6HmGlhoeO8FD7pw.jpg",
        tg: "https://t.me/kakadugenius",
        j_date: "June 2024",
        link: "https://t.me/nullCryptan",
        desc: "Designer icons for logo and website",
    },
];
