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
]);

export const about: Map<string, Array<string>> = new Map([
    ["header", ["About me", "Om mig"]],
    ["text", 
[`I started coding, if you can even call it that, with [https://scratch.mit.edu/](Scratch) at a young age. At 12, I began with "real" coding in the form of Python.
.
I'm currently into gamedev with [https://godotengine.org/](Godot) <img src="https://cdn.hackclub.com/019e36b3-06cf-7ca2-94f7-66607ad65e20/godot-spin.gif" alt="Godot Spin" class="godot-emoji"/>. As well as trying to better my webdev skills.
.
I am also a member of [https://hackclub.com/](Hack Club) and have attended two hackathons they organized, Shipwrecked and Midnight. 
.
---
~/Last updated on: 2026-05-17/~`,

`Jag började programmera, om man ens kan kalla det programmering, i [https://scratch.mit.edu/](Scratch) vid ung ålder. När jag var 12 började jag med "riktig" programmering i form av Python.
.
Just nu håller jag på med gamedev med [https://godotengine.org/](Godot) <img src="https://cdn.hackclub.com/019e36b3-06cf-7ca2-94f7-66607ad65e20/godot-spin.gif" alt="Godot Spin" class="godot-emoji"/>. Jag försöker även förbättra mina färdigheter inom webdev.
.
Jag är också medlem i [https://hackclub.com/](Hack Club) och har varit på två hackathons de organiserade, Shipwrecked och Midnight.
.
---
~/Senast uppdaterad: 2026-05-17/~`,]],
]);

export const projects: Map<string, Array<string>> = new Map([
    ["header", ["My projects", "Mina projekt"]],
    ["darkroom-desc", 
        ["A Hack Club \"YSWS\" where you build something photography-related and get cool photography stuff!", 
        "En Hack Club \"YSWS\" där du bygger något fotorelaterat och får roliga fotografigrejer!"]],
]);