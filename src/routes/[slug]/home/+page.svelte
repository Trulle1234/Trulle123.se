<svelte:head>
    <title>Trulle123.se • {localize(pageLinks, "home", slug)}</title>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { calculateAge, toggleLanguage, getLanguageLabel, getDottedLine } from "$lib/main";
    import { localize, pageLinks, home } from "$lib/localize"

    let slug = $derived(page.params.slug ?? "en");
    let pathname = $derived(page.url.pathname ?? "/en/home");

    let yearsAgo = $state(15.888888888);

    let copied = $state(false);

    async function copy() {
        var text =
`<a href="https://www.trulle123.se/" >
    <img src="https://www.trulle123.se/88x31.png" alt="Trulle123" />
</a>`;

        await navigator.clipboard.writeText(text);

        copied = true;

        setTimeout(() => {
            copied = false;
        }, 1500);
    }

    onMount(() => {
        yearsAgo = calculateAge();
        const interval = setInterval(() => {
            yearsAgo = calculateAge();
        }, 100);
        return () => clearInterval(interval);
        });
</script>

<main>
    <div class="hero">
        <div class="top-bar">
            <div class="page-links">
                <a href="/{slug}/home" class={getDottedLine(pathname, "home")}>{localize(pageLinks, "home", slug)}</a>
                <a href="/{slug}/about" class={getDottedLine(pathname, "about")}>{localize(pageLinks, "about", slug)}</a>
                <a href="/{slug}/projects" class={getDottedLine(pathname, "projects")}>{localize(pageLinks, "projects", slug)}</a>
                <a href="/{slug}/blog" class={getDottedLine(pathname, "blog")}>{localize(pageLinks, "blog", slug)}</a>
                <a href="/{slug}/contact" class={getDottedLine(pathname, "contact")}>{localize(pageLinks, "contact", slug)}</a>
            </div>

            <a href={toggleLanguage(pathname)} class="lang-button">
                {getLanguageLabel(pathname)}
                <img src="/globe.svg" alt="Globe" class="lang-globe">
            </a>
        </div>

        <h1 class="header">
            {localize(home, "header", slug)}
            <img
                src="/hii.webp"
                alt="Wave emoji"
                class="wave-emoji"
            />
        </h1>

        <p class="text">{localize(home, "text-p1", slug)} <span class="age">{yearsAgo.toFixed(9)}</span>{localize(home, "text-p2", slug)}</p>
        <hr>

        <div class="buttons">
            <button class="copy-button" onclick={copy}>
                <em>{copied ? localize(home, "copied", slug) : localize(home, "copy", slug)}</em>
                <br>
                <img src="/88x31.png" alt="Trulle123"/>
            </button>          
            
            <br>
            <br>
            
            <a href="https://v1c.rocks/" target="_blank">
                <img src="/vic.png" alt="Vic">
            </a>

            <a href="https://ingo.au/" target="_blank">
                <img src="/ingo.png" alt="Ingo Wolf">
            </a>

            <a href="https://hackclub.com/" target="_blank">
                <img src="/hackclub.png" alt="Hack Club">
            </a>

            <a href="https://www.wikipedia.org/" target="_blank">
                <img src="/wikipedia.gif" alt="Wikipedia">
            </a>

            <a href="https://archive.org/" target="_blank">
                <img src="/internet-archive.gif" alt="Internet Archive">
            </a>

            <a href="https://www.affinity.studio/" target="_blank">
                <img src="/godot.gif" alt="Godot Now!">
            </a>

            <a href="https://www.affinity.studio/" target="_blank">
                <img src="/affinity.png" alt="Affinity Now!">
            </a>
            <img src="/html.gif" alt="Learn HTML">

            <a href="https://code.visualstudio.com/" target="_blank">
                <img src="/vscode.png" alt="Made with VS Code">
            </a>

            <img src="/css.gif" alt="Made with CSS"/>

            <img src="/eyes.gif" alt="Best viewed with eyes"/>

            <a href="https://github.com/Trulle1234/Trulle123.se/blob/main/LICENSE" target="_blank">
                <img src="/mit.gif" alt="MIT Licence">
            </a>

            <a href="https://fightchatcontrol.eu/" target="_blank">
                <img src="/internetprivacy.gif" alt="Internet privacy now!">
            </a>

            <img src="/eu.gif" alt="I love the EU">
            
        </div>
    </div>
</main>