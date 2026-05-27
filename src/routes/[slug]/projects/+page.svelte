<svelte:head>
    <title>Trulle123.se • {localize(pageLinks, "projects", slug)}</title>
</svelte:head>

<script lang="ts">
    import { page } from "$app/state";
    import { toggleLanguage, getLanguageLabel, getDottedLine } from "$lib/main";
    import { localize, pageLinks, projects } from "$lib/localize";

    let slug = $derived(page.params.slug ?? "en");
    let pathname = $derived(page.url.pathname ?? "/en/home");

    let projectList = $derived([
        ["https://github.com/Trulle1234/Darkroom", "/darkroom.webp", "Darkroom", localize(projects, "darkroom-desc", slug)],
        ["https://github.com/Trulle1234/Markleft", "/markleft.webp", "Markleft", localize(projects, "markleft-desc", slug)],
        ["https://github.com/Trulle1234/SnowyCircuit", "/snowy-circuit.webp", "Snowy Circuit", localize(projects, "snowy-circuit-desc", slug)],
        ["https://github.com/Trulle1234/basisk", "/basisk.webp", "BASISK", localize(projects, "basisk-desc", slug)],
        ["https://github.com/Trulle1234/Trulle123.se", "/trulle123se.webp", "Trulle123.se", localize(projects, "trulle123.se-desc", slug)],
        ["https://github.com/Trulle1234/anthem-discs-fabric", "/anthem-discs.webp", "Anthem Discs", localize(projects, "anthem-discs-desc", slug)],
    ])
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

        <h1 class="header">{localize(projects, "header", slug)}</h1>

        <div class="projects-grid">
            {#each projectList as [link, img, name, desc]}
                <div class="project">
                    <a href={link} target="_blank" class="project-title">{name}</a>
                    <a href={link} target="_blank"><img src={img} alt={img} class="project-img"></a>
                    <p>{@html desc}</p>
                </div>
            {/each}
        </div>
        <div class="text">
        <br>
            <p>{@html localize(projects, "see", slug)}</p>
            <br>
            <hr>
            <sub><em>{localize(projects, "updated", slug)}</em>
        </sub></div>
    </div>
</main>