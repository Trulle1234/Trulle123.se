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
                alt="Wave"
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
            
            <a href="https://v1c.rocks/">
                <img src="https://v1c.rocks/88x31.png" alt="Vic">
            </a>


            <a href="https://www.wikipedia.org/">
                <img src="/wikipedia.gif" alt="Vic">
            </a>
        </div>
    </div>
</main>