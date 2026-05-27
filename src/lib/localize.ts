export function localize(part: Map<string, string[]>, id: string, slug: string): string {
    return part.get(id)?.[slug === "en" ? 0 : 1] ?? id;
}

export const pageLinks: Map<string, Array<string>> = new Map([
    ["home", ["Home", "Hem"]],
    ["about", ["About", "Om"]],
    ["projects", ["Projects", "Projekt"]],
    ["blog", ["Blog", "Blogg"]],
    ["contact", ["Contact", "Kontakt"]],

]);

export const redirect: Map<string, Array<string>> = new Map([
    ["header", ["Trulle123.se", "Trulle123.se"]],
    ["text", ["Redirecting to", "Omdirigerar till"]],
]);

export const home: Map<string, Array<string>> = new Map([
    ["header", ["Wello, I'm Trulle123", "Hallå, jag är Trulle123"]],
    ["text-p1", ["I'm a", "Jag är en"]],
    ["text-p2", 
        ["-year-old from Sweden who likes coding and photography.",
        "-åring från Sverige som gillar programmering och fotografi."]],
    ["copy", ["My 88x31, Click to copy:", "Min 88x31, Klicka för att kopiera:"]],
    ["copied", ["HTML copied!", "HTML kopierad!"]]
]);

export const about: Map<string, Array<string>> = new Map([
    ["header", ["About me", "Om mig"]],
    ["text", 
[`I started coding, if you can even call it that, with [https://scratch.mit.edu/](Scratch) at a young age. At 12, I began with "real" coding in the form of Python.
.
I'm currently into gamedev with [https://godotengine.org/](Godot) <img src="/godot-spin.gif" alt="Godot Spin" class="godot-emoji"/>. As well as trying to improve my webdev skills.
.
I am also a member of [https://hackclub.com/](Hack Club) and have attended two hackathons they organized, Shipwrecked and Midnight. 
.
My GitHub: [https://github.com/Trulle1234](@Trulle123)
.
---
~/Last updated on: 2026-05-21/~`,

`Jag började programmera, om man ens kan kalla det programmering, i [https://scratch.mit.edu/](Scratch) vid ung ålder. När jag var 12 började jag med "riktig" programmering i form av Python.
.
Just nu håller jag på med gamedev med [https://godotengine.org/](Godot) <img src="/godot-spin.gif" alt="Godot Spin" class="godot-emoji"/>. Jag försöker även bli bättre på webdev".
.
Jag är också medlem i [https://hackclub.com/](Hack Club) och har varit på två hackathons de organiserade, Shipwrecked och Midnight.
.
Min GitHub: [https://github.com/Trulle1234](@Trulle123)
.
---
~/Senast uppdaterad: 2026-05-21/~`]],
]);

export const projects: Map<string, Array<string>> = new Map([
    ["header", ["My projects", "Mina projekt"]],
    ["darkroom-desc", 
        ['A Hack Club "YSWS" where you build something photography-related and get cool photography stuff!', 
        'En Hack Club "YSWS" där du bygger något fotorelaterat och får roliga fotografigrejer!']],
    ["markleft-desc",
        ["A Markdown-like markup language with added features and adjusted syntax. It's used for much of this site.",
        "Ett Markdown liknande markup språk med tillagda funktioner och justerad syntax. Det används för en stor del av denna hemsida."]],
    ["snowy-circuit-desc",
        ["A platformer made in Godot. You play as a little computer guy jumping through a snowy landscape.",
        "En platformer gjord i Godot. Man spelar som en liten dator som hoppar genom ett snötäckt landskap."]],
    ["basisk-desc",
        ["BASISK is a swedish programming language with syntax partially inspired by BASIC.",
        "BASISK är ett svenskt programmeringsspråk med syntax som är delvis inspirerat av BASIC."]],
    ["trulle123.se-desc",
        ["My personal website and portfolio, the website you're on right now! Made with SvelteKit.",
        "Min personliga hemsida och portfolio, hemsidan du är på just nu! Gjord med SvelteKit."]],
    ["anthem-discs-desc", 
        ["A Minecraft mod that adds national anthems as music discs.",
        "En Minecraft mod som lägger till nationalsånger som musikskivor."]],
    ["see", 
        ['See <a href="https://search.shymike.dev/?q=user%3ATrulle1234" target="_blank">Otter</a> and <a href="https://github.com/Trulle1234" target="_blank">GitHub</a> for more of my projects.',
        'Se <a href="https://search.shymike.dev/?q=user%3ATrulle1234" target="_blank">Otter</a> och <a href="https://github.com/Trulle1234" target="_blank">GitHub</a> för fler av mina projekt.']],
    ["updated", ["Last updated on: 2026-05-22", "Senast uppdaterad: 2026-05-22"]]
]);

export const contact: Map<string, Array<string>> = new Map([
    ["header", ["Contact me", "Kontakta mig"]],
    ["text",
[`- [https://signal.me/#eu/goDTGAVNqTIa1Yp642VrlH39yCAPhoC5XPB82hrltCBDYclhJNVC75y-sMeKiPUd](Signal) - %trulle123.15%
- [mailto:trulle.123.contact@gmail.com](Email) - %trulle.123.contact@gmail.com%
- [https://hackclub.enterprise.slack.com/team/U07904YUJ6A](Hack Club Slack) - %@Trulle123%
.
---
~/Last updated on: 2026-05-21/~`,
`- [https://signal.me/#eu/goDTGAVNqTIa1Yp642VrlH39yCAPhoC5XPB82hrltCBDYclhJNVC75y-sMeKiPUd](Signal) - %trulle123.15%
- [mailto:trulle.123.contact@gmail.com](Mejl) - %trulle.123.contact@gmail.com%
- [https://hackclub.enterprise.slack.com/team/U07904YUJ6A](Hack Club Slack) - %@Trulle123%
.
---
~/Senast uppdaterad: 2026-05-21/~`,]],
]);

export const blog: Map<string, Array<string>> = new Map([
    ["header", ["My blog", "Min blogg"]],
    ["sv-notice", ["", "Bloggen är endast tillgänglig på engelska."]],
    ["no-found", ["No posts found.", "Inga inlägg hittades."]]
]);