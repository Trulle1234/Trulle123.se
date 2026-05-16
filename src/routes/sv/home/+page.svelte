<svelte:head>
    <title>Trulle123.se • Hem</title>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { calculateAge, toggleLanguage, getLanguageLabel, getDottedLine} from "$lib/main";

    let yearsAgo = $state(15.888888888);
    let pathname = page.url.pathname

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
                <a href="/home" class="{getDottedLine(pathname, "home")}">Hem</a>
                <a href="/about" class="{getDottedLine(pathname, "about")}">Om</a>
                <a href="/projects" class="{getDottedLine(pathname, "projects")}">Projekt</a>
                <a href="/blog" class="{getDottedLine(pathname, "blog")}">Blogg</a>
                <a href="/contact" class="{getDottedLine(pathname, "contact")}">Kontakt</a>
            </div>

            <a href={toggleLanguage(pathname)} class="lang-button">
                {getLanguageLabel(pathname)}
                <img src="https://cdn.hackclub.com/019e2be1-42bc-75c2-bed5-a02373a8d12f/globe.svg" alt="Globe" class="lang-globe">
            </a>
        </div>

        <h1 class="header">
            Hallå, jag är Trulle123
            <img
                src="https://emoji.slack-edge.com/T09V59WQY1E/hii/4de17234f4b1afe8.gif"
                alt="Wave"
                class="wave-emoji"
            />
        </h1>

        <p class="header-tagline">Jag är en <span class="age">{yearsAgo.toFixed(9).replace(".", ",")}</span>-åring från Sverige som gillar programmering och fotografi.</p>
        <hr>
    </div>
</main>