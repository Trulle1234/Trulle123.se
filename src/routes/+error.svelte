<svelte:head>
    <title>Trulle123.se • Home</title>
</svelte:head>

<script lang="ts">
    import { getDottedLine } from "$lib/main";
    import { localize, pageLinks } from "$lib/localize";
	import { page } from '$app/state';

    let slug = "en";
    let pathname = "/en/home";
</script>

<main>
    <div class="hero">
        <div class="top-bar">
            <div class="page-links">
                <a href="/en/home" class={getDottedLine(pathname, "home")}>{localize(pageLinks, "home", slug)}</a>
                <a href="/en/about" class={getDottedLine(pathname, "about")}>{localize(pageLinks, "about", slug)}</a>
                <a href="/en/projects" class={getDottedLine(pathname, "projects")}>{localize(pageLinks, "projects", slug)}</a>
                <a href="/en/blog" class={getDottedLine(pathname, "blog")}>{localize(pageLinks, "blog", slug)}</a>
                <a href="/en/contact" class={getDottedLine(pathname, "contact")}>{localize(pageLinks, "contact", slug)}</a>
            </div>
        </div>

        <h1 class="header">
            {page.status} {page.error?.message}
            <a href="/en/home"><img src="https://cdn.hackclub.com/019e50d4-53dc-7884-96ee-fc84fa4c354c/error.gif" alt="Error" class="error-emoji"></a>
        </h1> 

        <div class="text">
            <a href="/en/home">Return to home?</a>
        </div>
    </div>
</main>