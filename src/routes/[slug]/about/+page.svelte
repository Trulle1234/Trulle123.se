<svelte:head>
    <title>Trulle123.se • Home</title>
</svelte:head>

<script lang="ts">
    import { page } from "$app/state";
    import { toggleLanguage, getLanguageLabel, getDottedLine } from "$lib/main";
    import { localize, pageLinks, about } from "$lib/localize";
    import { parseMarkleft } from "$lib";

    let slug = $derived(page.params.slug ?? "en");
    let pathname = $derived(page.url.pathname ?? "/en/home");
</script>

<main>
    <div class="hero">
        <div class="top-bar">
            <div class="page-links">
                <a href="home" class={getDottedLine(pathname, "home")}>{localize(pageLinks, "home", slug)}</a>
                <a href="about" class={getDottedLine(pathname, "about")}>{localize(pageLinks, "about", slug)}</a>
                <a href="projects" class={getDottedLine(pathname, "projects")}>{localize(pageLinks, "projects", slug)}</a>
                <a href="blog" class={getDottedLine(pathname, "blog")}>{localize(pageLinks, "blog", slug)}</a>
                <a href="contact" class={getDottedLine(pathname, "contact")}>{localize(pageLinks, "contact", slug)}</a>
            </div>

            <a href={toggleLanguage(pathname)} class="lang-button">
                {getLanguageLabel(pathname)}
                <img src="https://cdn.hackclub.com/019e2be1-42bc-75c2-bed5-a02373a8d12f/globe.svg" alt="Globe" class="lang-globe">
            </a>
        </div>

        <h1 class="header">{localize(about, "header", slug)}</h1>

        <div class="markleft-text">{@html parseMarkleft(localize(about, "text", slug)).html}</div>
    </div>
</main>