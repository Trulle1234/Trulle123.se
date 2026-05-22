<svelte:head>
    <title>Trulle123.se • {localize(pageLinks, "home", slug)}</title>
</svelte:head>

<script lang="ts">
    import { page } from "$app/state";
    import { toggleLanguage, getLanguageLabel, getDottedLine } from "$lib/main";
    import { localize, pageLinks, blog } from "$lib/localize";
    import type { BlogListItem } from "./+page";

    let { data } = $props<{
        data: {
            blogList: BlogListItem[];
        };
    }>();

    let slug = $derived(page.params.slug ?? "en");
    let pathname = $derived(page.url.pathname ?? "/en/home");

    let blogList = $derived(data.blogList);
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

        <h1 class="header">{localize(blog, "header", slug)}</h1>
        <div class="text">
            <sup><em>{localize(blog, "sv-notice", slug)}</em></sup>
        </div>

        {#if blogList == null || blogList.length === 0}
            <div class="text"><em>{localize(blog, "no-found", slug)}</em> <img src="https://emoji.slack-edge.com/T09V59WQY1E/3d-sad-emoji/e35ee9bec8dfa875.png" class="sad-emoji" alt="Sad"></div>
        {/if}
        
        <div class="projects-grid">
            {#each blogList as [link, title, date, desc, img]}
                <div class="project">
                    <a href={"/" + slug + link} class="project-title">{title}</a>
                    <a href={"/" + slug + link}><img src={img} alt={img} class="project-img"></a>

                    <p>{desc}</p>
                    <sub class="blog-date"><em>{date}</em></sub>
                </div>
            {/each}
        </div>
    </div>
</main>