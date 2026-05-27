<svelte:head>
    <title>Trulle123.se • {data.post.title}</title>
</svelte:head>

<script lang="ts">
    import { page } from "$app/state";
    import { toggleLanguage, getLanguageLabel, getDottedLine } from "$lib/main";
    import { localize, pageLinks } from "$lib/localize";
    import { onMount } from "svelte";
    import { blur } from "svelte/transition";

    let { data } = $props<{
        data: {
            post: {
                title: string;
                date: string;
                desc: string;
                img: string;
                html: string;
            };
        };
    }>();

    let slug = $derived(page.params.slug ?? "en");
    let pathname = $derived(page.url.pathname ?? "/en/home");

  let visible = $state(false);

  function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    onMount(() => {
        function onScroll() {
            visible = window.scrollY > 150;
        }

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
        window.removeEventListener("scroll", onScroll);
    };
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

        <article class="blog-post">
            <h1 class="header">{data.post.title}</h1>

            <em class="blog-date">{data.post.date} • {data.post.desc}</em>
            <br>

            <img src={data.post.img} alt={data.post.title} class="blog-img">

            <hr>

            <div class="blog-text">
                {@html data.post.html}
            </div>
        </article>
    </div>

    {#if visible}
        <button class="to-top" type="button" aria-label="return to top" onclick={scrollToTop} transition:blur>➜</button>
    {/if}
</main>