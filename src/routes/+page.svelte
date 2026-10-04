<svelte:head>
    <title>Trulle123.se</title>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import { getLanguageLabel, getDottedLine } from "$lib/main";
    import { localize, pageLinks, redirect } from "$lib/localize"

    let slug = "en";
    let pathname = $derived(page.url.pathname ?? "/en/home");

    onMount(() => {
        goto(`/${slug}/home`);
    });</script>

<main>
    <div class="hero">
        <div class="top-bar">
            <div class="page-links">
                <a href="/" class={getDottedLine(pathname, "home")}>{localize(pageLinks, "home", slug)}</a>
                <a href="/" class={getDottedLine(pathname, "about")}>{localize(pageLinks, "about", slug)}</a>
                <a href="/" class={getDottedLine(pathname, "projects")}>{localize(pageLinks, "projects", slug)}</a>
                <a href="/" class={getDottedLine(pathname, "blog")}>{localize(pageLinks, "blog", slug)}</a>
                <a href="/" class={getDottedLine(pathname, "contact")}>{localize(pageLinks, "contact", slug)}</a>
            </div>

            <a href="/" class="lang-button">
                {getLanguageLabel(pathname)}
                <img src="/globe.svg" alt="Globe" class="lang-globe">
            </a>
        </div>

        <h1 class="header">{localize(redirect, "header", slug)}</h1>

        <p class="text">{localize(redirect, "header-tagline", slug)} <a href="/{slug}/home">trulle123.se/{slug}/home</a>...</p>
    </div>
</main>