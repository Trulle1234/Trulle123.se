<svelte:head>
    <title>Trulle123.se • Home</title>
</svelte:head>

<script lang="ts">
    import { page } from "$app/state";
    import { toggleLanguage, getLanguageLabel, getDottedLine } from "$lib/main";
    import { localize, pageLinks, projects } from "$lib/localize";

    let slug = $derived(page.params.slug ?? "en");
    let pathname = $derived(page.url.pathname ?? "/en/home");

    let projectList = [
        ["https://github.com/Trulle1234/Darkroom", "https://cdn.hackclub.com/019e4620-26c8-7081-8f4f-3ca6aaf18133/darkroom.png", "Darkroom", localize(projects, "darmroom-desc", slug)],
        ["https://github.com/Trulle1234/Darkroom", "https://cdn.hackclub.com/019e4620-26c8-7081-8f4f-3ca6aaf18133/darkroom.png", "Darkroom", localize(projects, "darmroom-desc", slug)],
        ["https://github.com/Trulle1234/Darkroom", "https://cdn.hackclub.com/019e4620-26c8-7081-8f4f-3ca6aaf18133/darkroom.png", "Darkroom", localize(projects, "darmroom-desc", slug)],
        ["https://github.com/Trulle1234/Darkroom", "https://cdn.hackclub.com/019e4620-26c8-7081-8f4f-3ca6aaf18133/darkroom.png", "Darkroom", localize(projects, "darmroom-desc", slug)],
        ["https://github.com/Trulle1234/Darkroom", "https://cdn.hackclub.com/019e4620-26c8-7081-8f4f-3ca6aaf18133/darkroom.png", "Darkroom", localize(projects, "darmroom-desc", slug)],
        ["https://github.com/Trulle1234/Darkroom", "https://cdn.hackclub.com/019e4620-26c8-7081-8f4f-3ca6aaf18133/darkroom.png", "Darkroom", localize(projects, "darmroom-desc", slug)],
    ]
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

        <h1 class="header">{localize(projects, "header", slug)}</h1>

        <div class="projects-grid">
            {#each projectList as [link, img, name, desc]}
                <div class="project">
                    <a href={link} target="_blank" class="project-title">{name}</a>
                    <a href={link} target="_blank"><img src={img} alt={img} class="project-img"></a>
                    <p>{desc}</p>
                </div>
            {/each}
        </div>
    </div>
</main>